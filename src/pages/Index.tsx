
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, TrendingUp, MessageSquare, CreditCard, Zap, Target, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Amplyst</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors">Testimonials</a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-gray-600 hover:text-purple-600">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">
            🚀 AI-Powered Influencer Marketing
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect. Collaborate. 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              {" "}Amplify.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The ultimate platform for influencers, brands, and agencies to create impactful partnerships 
            with AI-powered matching, real-time analytics, and seamless collaboration tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/register?role=influencer">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8">
                Join as Influencer
              </Button>
            </Link>
            <Link to="/register?role=brand">
              <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 px-8">
                Start as Brand
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">10K+</div>
              <div className="text-gray-600">Active Influencers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">500+</div>
              <div className="text-gray-600">Partner Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">$2M+</div>
              <div className="text-gray-600">Campaign Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run successful influencer marketing campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>AI-Powered Matching</CardTitle>
                <CardDescription>
                  Our advanced AI matches influencers with brands based on audience, engagement, and campaign goals.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Real-Time Analytics</CardTitle>
                <CardDescription>
                  Track campaign performance with detailed analytics and insights across all social platforms.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Seamless Communication</CardTitle>
                <CardDescription>
                  Built-in messaging system for smooth collaboration between influencers and brands.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Secure Payments</CardTitle>
                <CardDescription>
                  Automated payment processing with milestone tracking and secure escrow services.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Campaign Management</CardTitle>
                <CardDescription>
                  Comprehensive tools to create, manage, and optimize influencer marketing campaigns.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Contract Protection</CardTitle>
                <CardDescription>
                  Legal contract templates and e-signature integration for secure partnerships.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Role-Based Value Props */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Built for Everyone</h2>
            <p className="text-xl text-gray-600">Tailored solutions for influencers, brands, and agencies</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Influencers */}
            <Card className="p-8 hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">For Influencers</CardTitle>
                <CardDescription className="text-lg">
                  Monetize your content and grow your personal brand
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Find brand partnerships that match your audience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Track your performance across platforms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Secure payments and contract protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Build long-term brand relationships</span>
                </div>
                <Link to="/register?role=influencer" className="block pt-4">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Join as Influencer
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Brands */}
            <Card className="p-8 hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <TrendingUp className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">For Brands</CardTitle>
                <CardDescription className="text-lg">
                  Scale your marketing with authentic influencer partnerships
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700">AI-powered influencer discovery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700">Campaign ROI tracking and analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700">Streamlined collaboration tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="text-gray-700">Automated payment and contract management</span>
                </div>
                <Link to="/register?role=brand" className="block pt-4">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Start as Brand
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Agencies */}
            <Card className="p-8 hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="text-center pb-4">
                <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">For Agencies</CardTitle>
                <CardDescription className="text-lg">
                  Manage multiple clients and campaigns at scale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Multi-client campaign management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Team collaboration and permissions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">White-label reporting for clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">Advanced analytics and insights</span>
                </div>
                <Link to="/register?role=agency" className="block pt-4">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Agency Solutions
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of influencers and brands worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Amplyst revolutionized how I find brand partnerships. The AI matching is incredibly accurate!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Fashion Influencer</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "We've seen 300% better ROI on our campaigns since switching to Amplyst. The analytics are game-changing."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-indigo-600 font-semibold">MR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                    <div className="text-sm text-gray-600">Brand Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Managing campaigns for 20+ clients has never been easier. Amplyst saves us hours every week."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">EC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Emily Chen</div>
                    <div className="text-sm text-gray-600">Agency Director</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Amplify Your Success?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of influencers, brands, and agencies already using Amplyst to create impactful partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
                Get Started Free
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold text-white">Amplyst</span>
              </div>
              <p className="text-gray-400 text-sm">
                The ultimate influencer marketing platform connecting creators, brands, and agencies.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 Amplyst. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
