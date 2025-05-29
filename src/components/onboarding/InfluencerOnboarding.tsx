
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BasicInfo from "./steps/BasicInfo";
import SocialMediaLinked from "./steps/SocialMediaLinked";
import PortfolioSetup from "./steps/PortfolioSetup";
import CompletionStep from "./steps/CompletionStep";

const InfluencerOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    bio: "",
    niche: "",
    location: "",
    followerCount: "",
    socialAccounts: {
      instagram: "",
      tiktok: "",
      youtube: "",
      twitter: ""
    },
    portfolio: []
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (data: any) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfo data={formData} onUpdate={updateFormData} />;
      case 2:
        return <SocialMediaLinked data={formData} onUpdate={updateFormData} />;
      case 3:
        return <PortfolioSetup data={formData} onUpdate={updateFormData} />;
      case 4:
        return <CompletionStep data={formData} />;
      default:
        return <BasicInfo data={formData} onUpdate={updateFormData} />;
    }
  };

  const stepTitles = [
    "Basic Information",
    "Social Media Accounts",
    "Portfolio Setup", 
    "Complete Setup"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl animate-fade-in">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900 font-poppins">Amplyst</span>
          </div>
          <CardTitle className="text-2xl font-poppins">Complete Your Profile</CardTitle>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm font-medium text-primary">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-gray-600 mt-2 font-sofia">{stepTitles[currentStep - 1]}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="animate-slide-in-right" key={currentStep}>
            {renderStep()}
          </div>
          
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>
            
            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                className="flex items-center space-x-2 bg-primary hover:bg-primary-600"
              >
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                className="bg-secondary hover:bg-secondary-600"
                onClick={() => {
                  console.log("Profile completed:", formData);
                  // Handle completion logic here
                }}
              >
                Complete Setup
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfluencerOnboarding;
