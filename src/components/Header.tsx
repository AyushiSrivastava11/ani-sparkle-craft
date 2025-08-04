import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Moon, Sun } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const [isDark, setIsDark] = useState(false);

  const tabs = [
    { id: "overview", label: "Overview", icon: "🏠" },
    { id: "ai-features", label: "AI Features", icon: "🤖" },
    { id: "mobile-app", label: "Mobile App", icon: "📱" },
    { id: "analytics", label: "Analytics", icon: "📊" },
    { id: "multilingual", label: "Multilingual", icon: "🌐" },
  ];

  return (
    <header className="bg-card border-b border-border px-6 py-4 sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 ai-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Annapurna Finance AI</h1>
              <p className="text-sm text-muted-foreground">Professional Wireframe & UI/UX Design</p>
            </div>
          </div>

          <nav className="flex items-center space-x-1">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onTabChange(tab.id)}
                className={`relative transition-all duration-300 ${
                  activeTab === tab.id 
                    ? "ai-gradient-primary text-white shadow-lg scale-105" 
                    : "hover:bg-accent hover:scale-105"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white rounded-full" />
                )}
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-3">
          <Badge variant="secondary" className="ai-gradient-primary text-white ai-pulse px-3 py-1">
            <Sparkles className="w-4 h-4 mr-1" />
            AI-Powered
          </Badge>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsDark(!isDark)}
            className="w-9 h-9 rounded-full"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;