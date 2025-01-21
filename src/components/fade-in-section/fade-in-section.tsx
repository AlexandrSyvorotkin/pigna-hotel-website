import { useState, useRef, useEffect } from "react";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
  
      const currentRef = domRef.current;
      if (currentRef) {
        observer.observe(currentRef);
      }
  
      return () => {
        if (currentRef) {
          observer.disconnect();
        }
      };
    }, []);
  
    const fadeStyles = {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease-out',
      willChange: 'opacity, transform'
    };
  
    return (
      <div
        ref={domRef}
        className="fade-in"
        style={fadeStyles}
      >
        {children}
      </div>
    );
  };

export default FadeInSection;