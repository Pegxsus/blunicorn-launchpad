import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";
import MatrixRain from "@/components/landing/MatrixRain";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        <Link to="/" className="inline-block mb-12">
          <img src={logo} alt="Blukaze" className="h-10 w-auto mx-auto rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
        </Link>

        {/* 404 number */}
        <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter text-primary/15 select-none">
          404
        </h1>

        {/* Message */}
        <div className="-mt-6 md:-mt-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Lost in the matrix
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-border/60">
              <a onClick={() => window.history.back()} className="cursor-pointer">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
