import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Banknote, PieChart, Clock } from "lucide-react";

const features = [
  {
    title: "Smart Invoicing",
    description: "Generate and send professional invoices automatically with our intelligent system.",
    icon: FileText,
  },
  {
    title: "Faster Payments",
    description: "Get paid up to 3x faster with automated reminders and flexible payment options.",
    icon: Banknote,
  },
  {
    title: "Real-time Analytics",
    description: "Track payment status, cash flow, and business performance in real-time.",
    icon: PieChart,
  },
  {
    title: "Time-Saving Automation",
    description: "Save 15+ hours per week with automated collections and reconciliation.",
    icon: Clock,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything You Need for Modern B2B Payments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};