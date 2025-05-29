
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Instagram, Music, Youtube, Twitter, CheckCircle } from "lucide-react";

interface SocialMediaLinkedProps {
  data: any;
  onUpdate: (data: any) => void;
}

const SocialMediaLinked = ({ data, onUpdate }: SocialMediaLinkedProps) => {
  const updateSocialAccount = (platform: string, value: string) => {
    onUpdate({
      socialAccounts: {
        ...data.socialAccounts,
        [platform]: value
      }
    });
  };

  const socialPlatforms = [
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      placeholder: "@yourusername",
      color: "text-pink-600"
    },
    {
      id: "tiktok", 
      name: "TikTok",
      icon: Music,
      placeholder: "@yourusername",
      color: "text-black"
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: Youtube,
      placeholder: "Channel URL or @handle",
      color: "text-red-600"
    },
    {
      id: "twitter",
      name: "Twitter/X",
      icon: Twitter,
      placeholder: "@yourusername",
      color: "text-blue-600"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 font-poppins">Connect Your Social Media</h3>
        <p className="text-gray-600 text-sm">Link your social media accounts to showcase your reach and engagement</p>
      </div>

      <div className="space-y-4">
        {socialPlatforms.map((platform) => {
          const Icon = platform.icon;
          const isConnected = data.socialAccounts[platform.id];
          
          return (
            <div key={platform.id} className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon className={`h-5 w-5 ${platform.color}`} />
                <Label htmlFor={platform.id} className="font-medium">
                  {platform.name}
                </Label>
                {isConnected && (
                  <CheckCircle className="h-4 w-4 text-secondary animate-scale-in" />
                )}
              </div>
              
              <div className="flex space-x-2">
                <Input
                  id={platform.id}
                  value={data.socialAccounts[platform.id] || ""}
                  onChange={(e) => updateSocialAccount(platform.id, e.target.value)}
                  placeholder={platform.placeholder}
                  className="flex-1 transition-all duration-200 focus:ring-2 focus:ring-primary"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  Verify
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Why connect your accounts?</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Automatically pull your follower count and engagement metrics</li>
          <li>• Show brands your authentic audience and reach</li>
          <li>• Track campaign performance in real-time</li>
          <li>• Build trust with verified social media presence</li>
        </ul>
      </div>
    </div>
  );
};

export default SocialMediaLinked;
