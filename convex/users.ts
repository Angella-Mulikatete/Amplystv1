import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";
import { Doc, Id } from "./_generated/dataModel";
import bcrypt from "bcryptjs";

// Query to get the current user's profile
export const getMyProfile = query({
  handler: async (ctx): Promise<Doc<"profiles"> | null> => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return null;
    }
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();
      return profile;
  },
});

// convex/profiles.ts
// export const insertProfile = mutation({
//   args: {
//     role: v.union(
//       v.literal("influencer"),
//       v.literal("brand"),
//       v.literal("agency"),
//     ),
//     name: v.string(),
//     bio: v.optional(v.string()),
//     profilePictureUrl: v.optional(v.string()),
//     niche: v.optional(v.string()),
//     location: v.optional(v.string()),
//     followerCount: v.optional(v.string()),
//     socialAccounts: v.optional(
//       v.object({
//         instagram: v.string(),
//         tiktok: v.string(),
//         youtube: v.string(),
//         twitter: v.string(),
//       })
//     ),
//     portfolio: v.optional(v.array(v.any())),
//   },
//   handler: async (ctx, args) => {
//     try {
//       console.log("Inserting profile with args:", args);
//     // 1. Get Clerk auth identity
//     const identity = await ctx.auth.getUserIdentity();
//     if (!identity) throw new Error("User not authenticated");

//     console.log("User identity:", identity);

//     // 2. Check if user exists in your users table
//     const user = await ctx.db
//       .query("users")
//       .withIndex("by_token", q => 
//         q.eq("tokenIdentifier", identity.tokenIdentifier)
//       )
//       .unique();

//     // 3. If user doesn't exist, create them first
//     if (!user) {
//       await ctx.db.insert("users", {
//         tokenIdentifier: identity.tokenIdentifier,
//         email: identity.email!,
//         role: args.role,
//       });
//     }

//     // 4. Now handle profile creation/update
//     const existingProfile = await ctx.db
//       .query("profiles")
//       .withIndex("by_userId", q => 
//         q.eq("userId", user!._id) // user is guaranteed to exist now
//       )
//       .unique();

//     if (existingProfile) {
//       await ctx.db.patch(existingProfile._id, args);
//       return existingProfile._id;
//     } else {
//       return await ctx.db.insert("profiles", {
//         userId: user!._id,
//         ...args
//       });
//     }
//   } catch (error) {
//     console.error("Error inserting profile:", error);
//   }
// },
// });

export const insertProfile = mutation({
  args: {
    role: v.union(
      v.literal("influencer"),
      v.literal("brand"),
      v.literal("agency"),
    ),
    name: v.string(),
    bio: v.optional(v.string()),
    profilePictureUrl: v.optional(v.string()),
    niche: v.optional(v.string()),
    location: v.optional(v.string()),
    followerCount: v.optional(v.string()),
    socialAccounts: v.optional(
      v.object({
        instagram: v.string(),
        tiktok: v.string(),
        youtube: v.string(),
        twitter: v.string(),
      })
    ),
    portfolio: v.optional(v.array(v.any())),
  },
  handler: async (ctx, args) => {
    try {
      console.log("Inserting profile with args:", args);

      // 1. Get Clerk identity
      const identity = await ctx.auth.getUserIdentity();
      if (!identity) throw new Error("User not authenticated");
      console.log("User identity:", identity);

      // 2. Find user by email
      let user = await ctx.db
        .query("users")
        .withIndex("by_email", (q) => q.eq("email", identity.email!))
        .unique();

      // 3. If user doesn't exist, create them
      if (!user) {
        const newUserId = await ctx.db.insert("users", {
          tokenIdentifier: identity.tokenIdentifier,
          email: identity.email!,
          role: args.role,
        });
        user = await ctx.db.get(newUserId);
        if (!user) {
          throw new Error("Failed to retrieve newly created user");
        }
      }

      // 4. Query profile by userId (_id)
      const existingProfile = await ctx.db
        .query("profiles")
        .withIndex("by_userId", (q) => q.eq("userId", user._id))
        .unique();

      if (existingProfile) {
        await ctx.db.patch(existingProfile._id, {
          ...args,
          userId: user._id,
        });
        return existingProfile._id;
      } else {
        console.log("Creating new profile for user:", user._id);
        const profileId = await ctx.db.insert("profiles", {
          userId: user._id,
          ...args,
        });
        return profileId;
      }
    } catch (error) {
      console.error("Error inserting profile:", error);
      throw error; // rethrow so client knows
    }
  },
});



export const createOrGetUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Called createOrGetUser without authentication");
    }

    // Extract role from Clerk public metadata
    if (typeof identity.publicMetadata !== 'object' || identity.publicMetadata === null) {
      throw new Error("User identity public metadata is missing or malformed");
    }

    const publicMetadata = (identity.unsafeMetadata ?? identity.publicMetadata) as { role?: "influencer" | "brand" | "agency" };

    if (!publicMetadata.role) {
      throw new Error("User role is missing in public metadata");
    }

    const role = publicMetadata.role;

    // Check if the user already exists
    const user = await ctx.db.query("users").withIndex("by_token", (q) => q.eq("tokenIdentifier", identity.tokenIdentifier)).unique();

    if (user) {
      // If the user exists, return their ID
      return user._id;
    }

    // If the user doesn't exist, create a new one
    const userId = await ctx.db.insert("users", {
      tokenIdentifier: identity.tokenIdentifier,
      email: identity.email!,
      role
    });

    return userId;
  },
});

export const listInfluencers = query({
      args: {}, // Add filters later: niche, location, etc.
      handler: async (ctx) => {
        const influencers = await ctx.db
          .query("profiles")
          .filter((q) => q.eq(q.field("role"), "influencer"))
          .collect();
        return influencers;
      },
});


export const getInfluencerProfile = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;
    
    // Get user
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", q => q.eq("tokenIdentifier", identity.tokenIdentifier))
      .unique();
      
    if (!user) return null;
    
    // Get profile
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_userId", q => q.eq("userId", user._id))
      .unique();
      
    return profile;
  }
});

