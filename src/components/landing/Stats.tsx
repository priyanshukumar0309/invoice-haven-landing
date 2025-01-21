import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "$2B+", label: "Processed Annually" },
  { value: "20k+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "3x", label: "Faster Collections" },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-white/10 border-none">
              <CardContent className="p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};