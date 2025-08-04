import { useState } from "react";
import Header from "@/components/Header";
import Overview from "@/components/Overview";
import AIFeatures from "@/components/AIFeatures";
import MobileApp from "@/components/MobileApp";
import Analytics from "@/components/Analytics";
import Multilingual from "@/components/Multilingual";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "ai-features":
        return <AIFeatures />;
      case "mobile-app":
        return <MobileApp />;
      case "analytics":
        return <Analytics />;
      case "multilingual":
        return <Multilingual />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="max-w-7xl mx-auto px-6 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
