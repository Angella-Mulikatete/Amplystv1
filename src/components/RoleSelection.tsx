
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, BarChart3 } from "lucide-react";

interface RoleSelectionProps {
  onRoleSelect: (role: string) => void;
  selectedRole?: string;
}

const RoleSelection = ({ onRoleSelect, selectedRole }: RoleSelectionProps) => {
  const [selected, setSelected] = useState(selectedRole || "");

  const roles = [
    {
      id: "influencer",
      title: "Creator/Influencer",
      icon: Users,
      description: "Nano & micro-influencers (1K-100K followers) looking to monetize content and build brand partnerships",
      benefits: [
        "Find relevant brand collaborations",
        "Professional portfolio builder",
        "Secure payment processing", 
        "Campaign performance tracking"
      ],
      color: "purple"
    },
    {
      id: "brand",
      title: "Brand/SME",
      icon: TrendingUp,
      description: "Small to medium businesses and startups seeking authentic influencer partnerships",
      benefits: [
        "Discover nano & micro-influencers",
        "Cost-effective campaign management",
        "Real-time ROI tracking",
        "Streamlined collaboration tools"
      ],
      color: "indigo"
    },
    {
      id: "agency",
      title: "Marketing Agency",
      icon: BarChart3,
      description: "Agencies managing influencer campaigns for multiple clients",
      benefits: [
        "Multi-client campaign management",
        "Advanced reporting & analytics",
        "Team collaboration features",
        "White-label reporting options"
      ],
      color: "purple"
    }
  ];

  const handleRoleClick = (roleId: string) => {
    setSelected(roleId);
    onRoleSelect(roleId);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Role</h2>
        <p className="text-lg text-gray-600">
          Select how you'll be using Amplyst to get the most relevant experience
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = selected === role.id;
          
          return (
            <Card
              key={role.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                isSelected 
                  ? `ring-2 ring-${role.color}-500 border-${role.color}-300 shadow-lg` 
                  : 'hover:border-gray-300'
              }`}
              onClick={() => handleRoleClick(role.id)}
            >
              <CardHeader className="text-center pb-4">
                <Icon 
                  className={`h-12 w-12 mx-auto mb-4 ${
                    isSelected 
                      ? `text-${role.color}-600` 
                      : 'text-gray-400'
                  }`} 
                />
                <CardTitle className={`text-xl ${isSelected ? `text-${role.color}-900` : ''}`}>
                  {role.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {role.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {role.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 ${
                        isSelected ? `bg-${role.color}-500` : 'bg-gray-400'
                      }`}></div>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                {isSelected && (
                  <Button 
                    className={`w-full mt-4 bg-${role.color}-600 hover:bg-${role.color}-700`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onRoleSelect(role.id);
                    }}
                  >
                    Continue as {role.title}
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default RoleSelection;
