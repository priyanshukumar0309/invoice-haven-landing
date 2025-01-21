import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary-light via-primary to-primary-dark">
      <div className="absolute inset-0 bg-black/10" />
      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <h1 className="animate-fade-up text-4xl md:text-6xl font-bold text-white mb-6">
          Streamline Your B2B Payments
          <br />
          <span className="text-primary-light">Collect Faster, Grow Stronger</span>
        </h1>
        <p className="animate-fade-up text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Automate your invoicing, streamline collections, and get paid faster with our
          enterprise-grade payment solution.
        </p>
        <div className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-primary hover:bg-primary-light hover:text-white">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  );
};