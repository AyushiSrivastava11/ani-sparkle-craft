import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { 
  TrendingUp, 
  Target, 
  Users, 
  Globe,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  ShoppingBag,
  UserCheck
} from "lucide-react";

const Analytics = () => {
  const dashboardMetrics = [
    { label: "Prediction Accuracy", value: "89%", change: "+4% from last month", icon: <Target className="w-5 h-5" />, color: "success" },
    { label: "Collection Rate", value: "73%", change: "+12% with AI", icon: <TrendingUp className="w-5 h-5" />, color: "success" },
    { label: "AI Support", value: "24x7", change: "Average 2min response", icon: <Clock className="w-5 h-5" />, color: "primary" },
    { label: "Active Users", value: "15K+", change: "Across 5 languages", icon: <Users className="w-5 h-5" />, color: "warning" }
  ];

  const riskDistribution = [
    { name: 'Low Risk', value: 67, color: 'hsl(var(--success))' },
    { name: 'Medium Risk', value: 23, color: 'hsl(var(--warning))' },
    { name: 'High Risk', value: 10, color: 'hsl(var(--danger))' },
    { name: 'Default', value: 2, color: 'hsl(var(--chart-4))' }
  ];

  const languageUsage = [
    { language: 'Hindi', percentage: 45, color: 'hsl(var(--primary))' },
    { language: 'English', percentage: 25, color: 'hsl(var(--success))' },
    { language: 'Odia', percentage: 15, color: 'hsl(var(--warning))' },
    { language: 'Bengali', percentage: 10, color: 'hsl(var(--danger))' },
    { language: 'Sambalpuri', percentage: 2, color: 'hsl(var(--chart-5))' },
    { language: 'Santali', percentage: 3, color: 'hsl(var(--chart-4))' }
  ];

  const aiPerformance = [
    { metric: "Delinquency Prediction", percentage: 89, color: "success" },
    { metric: "Fraud Detection", percentage: 94, color: "success" },
    { metric: "Language Recognition", percentage: 96, color: "success" },
    { metric: "Response Accuracy", percentage: 91, color: "success" }
  ];

  const ondcAnalytics = [
    { label: "Active Sellers", value: "1,247", color: "success" },
    { label: "Monthly Transactions", value: "₹2.3L", color: "primary" },
    { label: "Product Categories", value: "15", color: "warning" },
    { label: "Average Order Value", value: "₹420", color: "danger" }
  ];

  const fieldAgentRecommendations = [
    { priority: "High Priority", count: 3, description: "customers need immediate attention", color: "danger" },
    { priority: "Medium Priority", count: 7, description: "customers for follow-up calls", color: "warning" },
    { priority: "Good Standing", count: 48, description: "customers on track", color: "success" }
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* AI-Powered Analytics Dashboard */}
      <section className="animate-delay-100">
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">AI-Powered Analytics Dashboard</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardMetrics.map((metric, index) => (
            <Card 
              key={index} 
              className="ai-card hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  metric.color === 'success' ? 'bg-success text-success-foreground' :
                  metric.color === 'warning' ? 'bg-warning text-warning-foreground' :
                  metric.color === 'primary' ? 'bg-primary text-primary-foreground' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {metric.icon}
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-xs text-success mt-1">{metric.change}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Portfolio Risk Distribution */}
        <section className="animate-delay-200">
          <Card className="ai-card">
            <h3 className="text-xl font-bold text-foreground mb-6">Portfolio Risk Distribution</h3>
            
            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={riskDistribution}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} className="chart-animate">
                    {riskDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <AlertTriangle className="w-4 h-4" />
              <span>AI predictions have reduced high-risk portfolio by 15%</span>
            </div>
          </Card>
        </section>

        {/* AI Performance */}
        <section className="animate-delay-300">
          <Card className="ai-card">
            <h3 className="text-xl font-bold text-foreground mb-6">AI Performance</h3>
            
            <div className="space-y-4">
              {aiPerformance.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{item.metric}</span>
                    <span className="text-sm font-bold text-success">{item.percentage}%</span>
                  </div>
                  <Progress value={item.percentage} className="h-2 progress-animate" />
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Language Usage Analytics */}
        <section className="animate-delay-400">
          <Card className="ai-card">
            <h3 className="text-xl font-bold text-foreground mb-6">Language Usage Analytics</h3>
            
            <div className="space-y-4">
              {languageUsage.map((lang, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-sm font-medium text-foreground">{lang.language}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24">
                      <Progress value={lang.percentage} className="h-2" />
                    </div>
                    <span className="text-sm font-medium text-foreground w-8">{lang.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* ONDC Analytics */}
        <section className="animate-delay-500">
          <Card className="ai-card">
            <div className="flex items-center space-x-2 mb-6">
              <ShoppingBag className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-foreground">ONDC Analytics</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {ondcAnalytics.map((item, index) => (
                <div key={index} className="text-center p-4 bg-accent rounded-lg">
                  <p className={`text-2xl font-bold ${
                    item.color === 'success' ? 'text-success' :
                    item.color === 'warning' ? 'text-warning' :
                    item.color === 'danger' ? 'text-danger' :
                    'text-primary'
                  }`}>
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>

      {/* Field Agent View */}
      <section className="animate-delay-600">
        <Card className="ai-card">
          <div className="flex items-center space-x-2 mb-6">
            <UserCheck className="w-5 h-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground">Field Agent View</h3>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-4">Today's AI Recommendations</h4>
            <div className="space-y-3">
              {fieldAgentRecommendations.map((rec, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg border-l-4 ${
                    rec.color === 'danger' ? 'bg-danger-light border-danger' :
                    rec.color === 'warning' ? 'bg-warning-light border-warning' :
                    'bg-success-light border-success'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge className={`${
                        rec.color === 'danger' ? 'bg-danger text-danger-foreground' :
                        rec.color === 'warning' ? 'bg-warning text-warning-foreground' :
                        'bg-success text-success-foreground'
                      }`}>
                        {rec.priority}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">{rec.count} {rec.description}</p>
                    </div>
                    <span className="text-2xl font-bold text-foreground">{rec.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Analytics;