import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Smartphone, 
  Download, 
  Star, 
  Shield, 
  Zap,
  Users,
  Bell,
  CreditCard,
  QrCode,
  Fingerprint
} from "lucide-react";

const MobileApp = () => {
  const appFeatures = [
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "UPI Payments",
      description: "Instant loan repayments with UPI 1.0",
      color: "primary"
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "QR Code Scanner",
      description: "Scan and pay bills instantly",
      color: "success"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Notifications",
      description: "AI-powered payment reminders",
      color: "warning"
    },
    {
      icon: <Fingerprint className="w-6 h-6" />,
      title: "Biometric Security",
      description: "Secure login with fingerprint",
      color: "danger"
    }
  ];

  const appStats = [
    { label: "App Downloads", value: "50K+", icon: <Download className="w-5 h-5" /> },
    { label: "User Rating", value: "4.8★", icon: <Star className="w-5 h-5" /> },
    { label: "Daily Active Users", value: "12K", icon: <Users className="w-5 h-5" /> },
    { label: "Security Score", value: "99%", icon: <Shield className="w-5 h-5" /> }
  ];

  const deviceSupport = [
    { os: "Android", version: "5.0+", support: 95 },
    { os: "iOS", version: "12.0+", support: 88 },
    { os: "Web App", version: "PWA", support: 100 }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* App Overview */}
      <section className="animate-delay-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="ai-card">
            <div className="flex items-center space-x-2 mb-6">
              <Smartphone className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">Annapurna Finance Mobile App</h2>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-32 h-56 mx-auto bg-gradient-to-b from-primary to-primary-glow rounded-2xl p-4 shadow-lg">
                  <div className="bg-white rounded-lg h-full flex flex-col">
                    <div className="bg-primary text-white p-2 text-xs font-medium rounded-t-lg">
                      Annapurna Finance AI
                    </div>
                    <div className="flex-1 p-2 space-y-1">
                      <div className="h-6 bg-gradient-to-r from-success to-success-light rounded text-xs flex items-center justify-center text-white">
                        ₹15,000 Available
                      </div>
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                      <div className="h-8 bg-primary rounded text-xs flex items-center justify-center text-white">
                        Pay Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {appStats.map((stat, index) => (
                  <div key={index} className="bg-accent p-3 rounded-lg text-center">
                    <div className="flex items-center justify-center mb-2 text-primary">
                      {stat.icon}
                    </div>
                    <p className="text-lg font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="ai-card">
            <h3 className="text-lg font-bold text-foreground mb-6">Key Features</h3>
            
            <div className="space-y-4">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 bg-accent rounded-lg hover:scale-105 transition-transform duration-300">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    feature.color === 'primary' ? 'bg-primary text-primary-foreground' :
                    feature.color === 'success' ? 'bg-success text-success-foreground' :
                    feature.color === 'warning' ? 'bg-warning text-warning-foreground' :
                    'bg-danger text-danger-foreground'
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Device Support */}
      <section className="animate-delay-200">
        <Card className="ai-card">
          <h3 className="text-lg font-bold text-foreground mb-6">Device & Platform Support</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deviceSupport.map((device, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  device.os === 'Android' ? 'bg-success text-success-foreground' :
                  device.os === 'iOS' ? 'bg-primary text-primary-foreground' :
                  'bg-warning text-warning-foreground'
                }`}>
                  <Smartphone className="w-8 h-8" />
                </div>
                <h4 className="font-medium text-foreground mb-2">{device.os}</h4>
                <p className="text-sm text-muted-foreground mb-3">{device.version}</p>
                <div className="space-y-2">
                  <Progress value={device.support} className="h-2" />
                  <p className="text-sm font-medium text-foreground">{device.support}% Compatible</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Download Section */}
      <section className="animate-delay-300">
        <Card className="ai-card text-center">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">Download Annapurna Finance App</h3>
            <p className="text-muted-foreground mb-6">
              Experience the power of AI-driven financial services on your mobile device.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="ai-gradient-primary text-white hover:scale-105 transition-transform duration-300">
                <Download className="w-4 h-4 mr-2" />
                Download for Android
              </Button>
              <Button variant="outline" className="hover:scale-105 transition-transform duration-300">
                <Download className="w-4 h-4 mr-2" />
                Download for iOS
              </Button>
            </div>
            
            <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>Secured by bank-grade encryption</span>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default MobileApp;