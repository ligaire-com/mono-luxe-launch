import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-luxury-black">
      <div className="text-center">
        <h1 className="typography-display-large text-luxury-white mb-8">404</h1>
        <p className="typography-body text-luxury-white-70 mb-8">Oops! Page not found</p>
        <a 
          href="/" 
          className="btn-luxury-minimal hover:text-luxury-white"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
