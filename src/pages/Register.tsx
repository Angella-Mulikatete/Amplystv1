
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useSearchParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, BarChart3 } from "lucide-react";

const Register = () => {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get("role");
  const [selectedRole, setSelectedRole] = useState(roleParam || "");

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

  const roleDescriptions = {
    influencer: "Monetize your content and grow your personal brand",
    brand: "Scale your marketing with authentic influencer partnerships",
    agency: "Manage multiple clients and campaigns at scale"
  };

  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Amplyst</span>
            </div>
            <CardTitle className="text-2xl">Join Amplyst</CardTitle>
            <CardDescription>
              Choose your role to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(roleIcons).map(([role, Icon]) => (
                <Card 
                  key={role}
                  className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-purple-300"
                  onClick={() => setSelectedRole(role)}
                >
                  <CardContent className="p-6 text-center">
                    <Icon className={`h-12 w-12 mx-auto mb-4 ${roleColors[role as keyof typeof roleColors]}`} />
                    <h3 className="font-semibold text-lg capitalize mb-2">{role}</h3>
                    <p className="text-sm text-gray-600">
                      {roleDescriptions[role as keyof typeof roleDescriptions]}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
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
              {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
            </Badge>
          </div>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>
            Join as {selectedRole === "influencer" ? "an" : "a"} {selectedRole}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
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
              onClick={() => setSelectedRole("")}
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
