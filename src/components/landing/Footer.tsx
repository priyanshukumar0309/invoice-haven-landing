import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Collections?</h2>
          <p className="text-lg mb-8 text-white/80">
            Join thousands of businesses that trust us with their B2B payments
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark">
            Start Your Free Trial
          </Button>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-white/60 text-center">
          © 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};