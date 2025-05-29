
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useSearchParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import RoleSelection from "@/components/RoleSelection";
import { Users, TrendingUp, BarChart3 } from "lucide-react";

const Register = () => {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get("role");
  const [selectedRole, setSelectedRole] = useState(roleParam || "");
  const [step, setStep] = useState(roleParam ? "details" : "role");

  const roleIcons = {
    influencer: Users,
    brand: TrendingUp,
    agency: BarChart3
  };

  const roleColors = {
    influencer: "text-purple-600",
    brand: "text-indigo-600", 
    agency: "text-purple-600"
  };

  const roleLabels = {
    influencer: "Creator/Influencer",
    brand: "Brand/SME",
    agency: "Marketing Agency"
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setStep("details");
  };

  if (step === "role") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-5xl">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Amplyst</span>
            </div>
            <CardTitle className="text-2xl">Welcome to Amplyst</CardTitle>
            <CardDescription>
              The smart platform connecting nano & micro-influencers with brands
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RoleSelection onRoleSelect={handleRoleSelect} />
            <div className="text-center mt-8">
              <Link to="/" className="text-sm text-gray-600 hover:text-purple-600">
                ← Back to home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const RoleIcon = roleIcons[selectedRole as keyof typeof roleIcons];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Amplyst</span>
          </div>
          <div className="flex items-center justify-center mb-4">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
              <RoleIcon className="h-4 w-4 mr-1" />
              {roleLabels[selectedRole as keyof typeof roleLabels]}
            </Badge>
          </div>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>
            {selectedRole === "influencer" && "Start monetizing your content and building brand partnerships"}
            {selectedRole === "brand" && "Discover authentic nano & micro-influencers for your campaigns"}
            {selectedRole === "agency" && "Manage influencer campaigns at scale for your clients"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {selectedRole === "influencer" && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="Sarah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Johnson" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="@sarahbeauty" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="followerCount">Approximate follower count</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select range...</option>
                  <option value="1k-5k">1K - 5K followers</option>
                  <option value="5k-10k">5K - 10K followers</option>
                  <option value="10k-25k">10K - 25K followers</option>
                  <option value="25k-50k">25K - 50K followers</option>
                  <option value="50k-100k">50K - 100K followers</option>
                </select>
              </div>
            </>
          )}
          
          {selectedRole === "brand" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="companyName">Company name</Label>
                <Input id="companyName" placeholder="EcoWear" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://ecowear.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select industry...</option>
                  <option value="fashion">Fashion & Apparel</option>
                  <option value="beauty">Beauty & Skincare</option>
                  <option value="health">Health & Wellness</option>
                  <option value="food">Food & Beverage</option>
                  <option value="tech">Technology</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="fitness">Fitness</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </>
          )}

          {selectedRole === "agency" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="agencyName">Agency name</Label>
                <Input id="agencyName" placeholder="Bright Ideas Agency" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clientCount">Number of clients</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select range...</option>
                  <option value="1-5">1-5 clients</option>
                  <option value="6-15">6-15 clients</option>
                  <option value="16-30">16-30 clients</option>
                  <option value="30+">30+ clients</option>
                </select>
              </div>
            </>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="hello@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Create a password" />
          </div>
          
          <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
            Create Account
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600 hover:underline">
              Sign in
            </Link>
          </div>
          <div className="text-center">
            <button 
              onClick={() => setStep("role")}
              className="text-sm text-gray-600 hover:text-purple-600"
            >
              ← Change role
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
