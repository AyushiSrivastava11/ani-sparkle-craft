import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { 
  Bot, 
  TrendingUp, 
  MessageSquare, 
  Bell,
  User,
  CheckCircle,
  AlertCircle,
  Send,
  Mic,
  Languages
} from "lucide-react";

const AIFeatures = () => {
  const predictions = [
    { name: "Rajesh Kumar", date: "Due: 23rd Dec, 2024", amount: "₹2,500", risk: "High Risk", status: "high" },
    { name: "Priya Sharma", date: "Due: 25th Dec, 2024", amount: "₹1,800", risk: "Medium Risk", status: "medium" },
    { name: "Amit Patel", date: "Due: 30th Dec, 2024", amount: "₹3,200", risk: "Low Risk", status: "low" }
  ];

  const chatMessages = [
    { text: "आपको आज के मान में 5 दिन की देरी से वसूली होगी।", sender: "ai", language: "hi" },
    { text: "24 घंटा चुकाने की समय सीमा है व अगली राशि 1 जनवरी से शुरू होगी।", sender: "user", language: "hi" }
  ];

  const agentPersonas = [
    { type: "Soft", description: "Gentle approach", percentage: 65, color: "success" },
    { type: "Friendly", description: "Warm communication", percentage: 25, color: "warning" },
    { type: "Firm", description: "Direct approach", percentage: 10, color: "danger" }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Delinquency Prediction Engine */}
      <section className="animate-delay-100">
        <Card className="ai-card ai-gradient-primary text-white">
          <div className="flex items-center space-x-3 mb-6">
            <TrendingUp className="w-6 h-6" />
            <h2 className="text-xl font-bold">Delinquency Prediction Engine</h2>
          </div>
          <p className="text-white/90 mb-6">Advanced ML models predict payment defaults 7-10 days in advance</p>
          
          <div className="space-y-4">
            {predictions.map((prediction, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 animate-delay-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-white">{prediction.name}</h4>
                    <p className="text-sm text-white/80">{prediction.date}</p>
                    <p className="text-sm text-white/80">{prediction.amount}</p>
                  </div>
                  <Badge 
                    className={`${
                      prediction.status === 'high' ? 'bg-danger text-danger-foreground' :
                      prediction.status === 'medium' ? 'bg-warning text-warning-foreground' :
                      'bg-success text-success-foreground'
                    }`}
                  >
                    {prediction.risk}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Hyper-Personalized Reminders */}
      <section className="animate-delay-200">
        <Card className="ai-card ai-gradient-success text-white">
          <div className="flex items-center space-x-3 mb-6">
            <Bell className="w-6 h-6" />
            <h2 className="text-xl font-bold">Hyper-Personalized Reminders</h2>
          </div>
          <p className="text-white/90 mb-6">AI adapts messaging tone, timing, and channel preferences</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-4">Agent Persona Adaptation</h4>
              <div className="space-y-3">
                {agentPersonas.map((persona, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{persona.type}</span>
                      <span className="text-sm">{persona.percentage}%</span>
                    </div>
                    <Progress value={persona.percentage} className="h-2" />
                    <p className="text-xs text-white/80 mt-1">{persona.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Channel Preference Learning</h4>
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm font-medium">SMS</span>
                    <Badge className="bg-success text-success-foreground text-xs">70% Success</Badge>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm font-medium">WhatsApp</span>
                    <Badge className="bg-warning text-warning-foreground text-xs">45% Success</Badge>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">Voice Call</span>
                    <Badge className="bg-success text-success-foreground text-xs">85% Success</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
            <h4 className="font-medium mb-2">AI-Generated Message</h4>
            <p className="text-sm text-white/90 italic">
              "आपका लोन EMI ₹2,500 कल 23 दिसंबर को देय है। कृपया समय पर भुगतान करें ताकि आपकी क्रेडिट रेटिंग प्रभावित न हो।"
            </p>
            <div className="flex items-center space-x-2 mt-3">
              <Badge className="bg-white/20 text-white text-xs">Soft Tone</Badge>
              <Badge className="bg-white/20 text-white text-xs">Hindi</Badge>
              <Badge className="bg-white/20 text-white text-xs">SMS Preferred</Badge>
            </div>
          </div>
        </Card>
      </section>

      {/* 24x7 AI Chat Companion */}
      <section className="animate-delay-300">
        <Card className="ai-card ai-gradient-warning text-white">
          <div className="flex items-center space-x-3 mb-6">
            <Bot className="w-6 h-6" />
            <h2 className="text-xl font-bold">24x7 AI Chat Companion</h2>
          </div>
          <p className="text-white/90 mb-6">Multilingual conversational AI for seamless support and guidance</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-4">Live Chat Demo</h4>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 h-64 overflow-y-auto">
                <div className="space-y-3">
                  {chatMessages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`flex ${message.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div 
                        className={`max-w-xs p-3 rounded-lg ${
                          message.sender === 'ai' 
                            ? 'bg-white/20 text-white' 
                            : 'bg-white text-gray-800'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          {message.sender === 'ai' && <Bot className="w-3 h-3" />}
                          <span className="text-xs opacity-70">
                            {message.language === 'hi' ? 'हिंदी' : 'English'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 flex space-x-2">
                <Textarea 
                  placeholder="अपना प्रश्न यहाँ लिखें..." 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  rows={2}
                />
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Send className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Mic className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Language Detection</h4>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Auto-detected language from voice input</span>
                    <Badge className="bg-success text-success-foreground">87% Confidence</Badge>
                  </div>
                  <p className="text-xs text-white/80">Current: Hindi (हिंदी)</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium mb-3">Smart Responses</h5>
                  <div className="space-y-2">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm">• Loan payment reminders</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm">• ONDC marketplace help</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm">• Bill payment guidance</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm">• AI investment advisory</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium mb-3">Voice Support</h5>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Voice-to-Text (Hindi)</span>
                      <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                        <Languages className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm">Text-to-Speech</span>
                      <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                        Regional
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default AIFeatures;