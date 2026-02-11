import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import logo from "@/assets/logo.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        <Link to="/" className="inline-block mb-10">
          <img src={logo} alt="Blukaze" className="h-12 w-auto mx-auto rounded-lg" />
        </Link>

        {/* 404 number */}
        <h1 className="text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter text-foreground/10 select-none">
          404
        </h1>

        {/* Message */}
        <div className="-mt-8 md:-mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
            Page not found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
