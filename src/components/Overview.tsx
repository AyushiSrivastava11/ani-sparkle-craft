import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { 
  Bot, 
  Shield, 
  MessageSquare, 
  AlertTriangle,
  CreditCard,
  Zap,
  ShoppingCart,
  Globe
} from "lucide-react";

const Overview = () => {
  const riskData = [
    { name: 'Low Risk', value: 67, color: 'hsl(var(--success))' },
    { name: 'Medium Risk', value: 23, color: 'hsl(var(--warning))' },
    { name: 'High Risk', value: 10, color: 'hsl(var(--danger))' }
  ];

  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Delinquency Prediction",
      description: "7-10 day advance prediction with 89% accuracy",
      gradient: "ai-gradient-primary"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Hyper-Personalized Reminders",
      description: "Agent persona & channel optimization",
      gradient: "ai-gradient-success"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "24x7 AI Chat Companion",
      description: "Multilingual support in 5+ regional languages",
      gradient: "ai-gradient-warning"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Fraud Detection",
      description: "ML-powered anomaly detection system",
      gradient: "ai-gradient-danger"
    }
  ];

  const coreFeatures = [
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Loan Repayment",
      description: "UPI 1.0 Integration"
    },
    {
      icon: <Zap className="w-8 h-8 text-warning" />,
      title: "BBPS Bills",
      description: "Electricity, Gas, Recharge"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-success" />,
      title: "ONDC Marketplace",
      description: "Buy & Sell Products"
    }
  ];

  const languages = [
    { name: "हिंदी", code: "HI", active: true },
    { name: "English", code: "EN", active: false },
    { name: "ওড়িয়া", code: "OR", active: false },
    { name: "বাংলা", code: "BN", active: false },
    { name: "ਪੰਜਾਬੀ", code: "PA", active: false },
    { name: "આરબેઝી", code: "GU", active: false }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Key AI-Driven Features */}
      <section className="animate-delay-100">
        <div className="flex items-center space-x-2 mb-6">
          <Bot className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Key AI-Driven Features</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`ai-card hover:scale-105 transition-transform duration-300 animate-delay-${(index + 1) * 100}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${feature.gradient} rounded-lg flex items-center justify-center text-white`}>
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Core Application Features */}
        <section className="lg:col-span-2 animate-delay-200">
          <div className="flex items-center space-x-2 mb-6">
            <Globe className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Core Application Features</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="ai-card text-center hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* AI Risk Prediction */}
        <section className="animate-delay-300">
          <div className="flex items-center space-x-2 mb-6">
            <AlertTriangle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">AI Risk Prediction</h2>
          </div>
          
          <Card className="ai-card">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-32 h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={riskData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      startAngle={90}
                      endAngle={450}
                      dataKey="value"
                      className="chart-animate"
                    >
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">73%</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">Overall Portfolio Health</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge className="risk-low">Low Risk</Badge>
                    <span className="text-sm font-medium">67%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className="risk-medium">Medium Risk</Badge>
                    <span className="text-sm font-medium">23%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge className="risk-high">High Risk</Badge>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>

      {/* Language Support */}
      <section className="animate-delay-400">
        <div className="flex items-center space-x-2 mb-6">
          <Globe className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Language Support</h2>
        </div>
        
        <Card className="ai-card">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {languages.map((lang, index) => (
              <Button
                key={index}
                variant={lang.active ? "default" : "outline"}
                className={`h-12 ${lang.active ? 'ai-gradient-primary text-white' : ''} lang-float transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {lang.name}
              </Button>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Overview;