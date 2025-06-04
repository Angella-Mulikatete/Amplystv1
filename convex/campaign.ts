import { mutation, query } from "./_generated/server";
    import { v } from "convex/values";
    import { getAuthUserId } from "@convex-dev/auth/server";
    import { Doc, Id } from "./_generated/dataModel";

    export const createCampaign = mutation({
      args: {
        title: v.string(),
        description: v.string(),
        budget: v.optional(v.number()),
        status: v.string(), // e.g., "draft", "active"
        targetAudience: v.optional(v.string()),
        contentTypes: v.optional(v.array(v.string())),
        duration: v.optional(v.string()),
      },
      handler: async (ctx, args) => {
        const userId = await getAuthUserId(ctx);
        if (!userId) {
          throw new Error("User not authenticated");
        }

        // Optional: Check if user has 'brand' or 'agency' role
        const profile = await ctx.db.query("profiles").withIndex("by_userId", q => q.eq("userId", userId)).unique();
        if (!profile || (profile.role !== "brand" && profile.role !== "agency")) {
          throw new Error("Only brands or agencies can create campaigns.");
        }

        const campaignId = await ctx.db.insert("campaigns", {
          creatorUserId: userId,
          ...args,
        });
        return campaignId;
      },
    });

    export const listCampaigns = query({
      args: {}, // Add filters later
      handler: async (ctx) => {
        // Optionally, only show campaigns relevant to the user or all active campaigns
        const campaigns = await ctx.db.query("campaigns").order("desc").collect();
        return campaigns;
      },
    });

    export const getCampaignDetails = query({
      args: { campaignId: v.id("campaigns") },
      handler: async (ctx, args): Promise<Doc<"campaigns"> | null> => {
        return await ctx.db.get(args.campaignId);
      },
    });
