import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Globe, 
  Mic, 
  Volume2, 
  ArrowRight, 
  Settings, 
  Users,
  TrendingUp,
  MessageSquare,
  Phone,
  CheckCircle
} from "lucide-react";

const Multilingual = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("hi");
  const [inputText, setInputText] = useState("कृपया आज अपना लोन भुगतान कर दीजिये।");

  const languages = [
    { code: "hi", name: "हिंदी", english: "Hindi" },
    { code: "en", name: "English", english: "English" },
    { code: "or", name: "ওড়িয়া", english: "Odia" },
    { code: "bn", name: "বাংলা", english: "Bengali" },
    { code: "sb", name: "ਸੰਬਲਪੁਰੀ", english: "Sambalpuri" },
    { code: "st", name: "सन्ताली", english: "Santali" }
  ];

  const translations = [
    {
      english: "Your loan payment is due tomorrow. Please make the payment to avoid late fees.",
      hindi: "आपका लोन भुगतान कल देय है। कृपया देर से शुल्क से बचने के लिए भुगतान करें।",
      auto: true
    },
    {
      english: "সহায়তার জন্য আমাদের কল করুন। আমরা আপনাকে সাহায্য করতে পারি।",
      hindi: "सहायता के लिए हमें कॉल करें। हम आपकी मदद कर सकते हैं।",
      auto: false
    },
    {
      english: "আপনার অ্যাকাউন্ট নিরাপদ রাখতে এই পদক্ষেপগুলি অনুসরণ করুন।",
      hindi: "अपने खाते को सुरक्षित रखने के लिए इन चरणों का पालन करें।",
      auto: false
    }
  ];

  const voiceCommands = [
    { command: "अपना खाता देखें", confidence: 87 },
    { command: "लोन स्टेटस चेक करें", confidence: 94 },
    { command: "पेमेंट करें", confidence: 89 }
  ];

  const userInsights = [
    { language: "Hindi", users: "89%", engagement: "High" },
    { language: "Bengali", users: "34%", engagement: "Medium" },
    { language: "Odia", users: "56%", engagement: "High" }
  ];

  const escalationLevels = [
    {
      level: "Level 1: AI Chat",
      description: "Text/Voice 73% of queries automatically",
      languages: "All 6 supported",
      status: "success"
    },
    {
      level: "Level 2: Human Agent",
      description: "Complex queries & complaints",
      languages: "Hindi & English",
      status: "warning"
    },
    {
      level: "Level 3: Field Officer",
      description: "Regional cases & personal visits",
      languages: "All regional languages",
      status: "danger"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Multilingual Interface Demo */}
      <section className="animate-delay-100">
        <Card className="ai-card">
          <div className="flex items-center space-x-2 mb-6">
            <Globe className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Multilingual Interface Demo</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={selectedLanguage === lang.code ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLanguage(lang.code)}
                    className={`${selectedLanguage === lang.code ? 'ai-gradient-primary text-white' : ''} transition-all duration-300`}
                  >
                    {lang.name}
                  </Button>
                ))}
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">राशि भुगतान (Amount Payment)</label>
                  <Input 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="text-lg"
                    placeholder="अपना संदेश यहाँ लिखें..."
                  />
                </div>
                
                <Button className="w-full ai-gradient-primary text-white hover:scale-105 transition-transform duration-300">
                  भुगतान करें (Make Payment)
                </Button>
                
                <div className="bg-accent p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">AI Assistant से संदेश</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    आपका भुगतान सफल रहा है। धन्यवाद! आपकी अगली EMI 15 जनवरी को देय है।
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Voice Support Demo</h4>
              <div className="space-y-4">
                <div className="bg-accent p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Voice-to-Text (Hindi)</span>
                    <Button variant="outline" size="sm">
                      <Mic className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    "मेरा खाता कितना पैसा बाकी है?"
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Progress value={94} className="flex-1 h-2" />
                    <span className="text-xs font-medium">94%</span>
                  </div>
                </div>
                
                <div className="bg-accent p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Text-to-Speech Response</span>
                    <Button variant="outline" size="sm">
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Regional accent: मराठी/Hindi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Real-time Translation Engine */}
      <section className="animate-delay-200">
        <Card className="ai-card">
          <div className="flex items-center space-x-2 mb-6">
            <ArrowRight className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Real-time Translation Engine</h2>
          </div>
          
          <div className="space-y-4">
            {translations.map((translation, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">Input (English)</Badge>
                      {translation.auto && (
                        <Badge className="bg-success text-success-foreground">AI Translation</Badge>
                      )}
                    </div>
                    <p className="text-sm text-foreground">{translation.english}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">Output (Hindi)</Badge>
                      <Badge className="bg-primary text-primary-foreground">Real-time</Badge>
                    </div>
                    <p className="text-sm text-foreground">{translation.hindi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Language Preference Analytics */}
        <section className="animate-delay-300">
          <Card className="ai-card">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Language Preference Analytics</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">User Behavior Insights</h4>
                <div className="space-y-3">
                  {userInsights.map((insight, index) => (
                    <div key={index} className="bg-accent p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-foreground">{insight.language}</span>
                        <Badge className={`${
                          insight.engagement === 'High' ? 'bg-success text-success-foreground' :
                          'bg-warning text-warning-foreground'
                        }`}>
                          {insight.engagement}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Progress value={parseInt(insight.users)} className="flex-1 h-2" />
                        <span className="text-sm font-medium">{insight.users}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Notification Language</h4>
                <Select defaultValue="hindi">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="mixed">Mix (Hindi+English)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Chat Preference</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-accent rounded">
                    <span className="text-sm">SMS</span>
                    <Badge>Most preferred format</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-accent rounded">
                    <span className="text-sm">Voice Commands</span>
                    <Badge variant="outline">Regional</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Smart Escalation Workflow */}
        <section className="animate-delay-400">
          <Card className="ai-card">
            <div className="flex items-center space-x-2 mb-6">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Smart Escalation Workflow</h3>
            </div>
            
            <div className="space-y-4">
              {escalationLevels.map((level, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border-l-4 ${
                    level.status === 'success' ? 'bg-success-light border-success' :
                    level.status === 'warning' ? 'bg-warning-light border-warning' :
                    'bg-danger-light border-danger'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-foreground">{level.level}</h4>
                    <CheckCircle className={`w-4 h-4 ${
                      level.status === 'success' ? 'text-success' :
                      level.status === 'warning' ? 'text-warning' :
                      'text-danger'
                    }`} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{level.description}</p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Languages:</strong> {level.languages}
                  </p>
                  {level.status === 'success' && (
                    <div className="mt-2">
                      <Badge className="bg-success text-success-foreground">With AI translation support</Badge>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-accent rounded-lg">
              <h4 className="font-medium text-foreground mb-2">AI/Chatbot Case Summary</h4>
              <p className="text-sm text-muted-foreground">
                Customer रवि कुमार contacted via WhatsApp in मराठी regarding payment दिनांक postponement. 
                AI successfully resolved the query and scheduled new payment तारीख for 28th December.
                No human escalation required.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Multilingual;