import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$99",
    features: ["Up to 100 invoices/month", "Email support", "Basic analytics", "2 team members"],
  },
  {
    name: "Professional",
    price: "$299",
    features: ["Unlimited invoices", "Priority support", "Advanced analytics", "10 team members"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Custom solutions", "24/7 support", "Custom integrations", "Unlimited team members"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-center mt-4">{plan.price}</div>
                <div className="text-sm text-center text-muted-foreground">per month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.name === "Professional" ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};