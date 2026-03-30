import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      // Argentina time = UTC-3
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const argTime = new Date(utc + -3 * 3600000);
      const hour = argTime.getHours();
      setIsActive(hour >= 9 && hour < 17);
    };
    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {!isActive && (
        <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
          <div className="rounded-lg bg-foreground px-3 py-2 text-xs text-primary-foreground shadow-lg whitespace-nowrap">
            Atención disponible de 9 a 17 hs
          </div>
        </div>
      )}
      <a
        href={isActive ? "https://wa.me/5492616241234" : undefined}
        target={isActive ? "_blank" : undefined}
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isActive
            ? "bg-[#25D366] hover:bg-[#20BA5C] cursor-pointer hover:scale-110"
            : "bg-muted cursor-default opacity-60"
        }`}
        aria-label="Contactar por WhatsApp"
        onClick={(e) => !isActive && e.preventDefault()}
      >
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
