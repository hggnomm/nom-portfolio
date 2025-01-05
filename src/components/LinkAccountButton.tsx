import Image from "next/image";
import { useState } from "react";

interface LinkAccountButtonProps {
  url: string;
  iconSrc: string;
  iconSrcHover: string; 
  altText: string;
  buttonClass?: string;
  iconWidth?: number;
  iconHeight?: number;
}

const LinkAccountButton: React.FC<LinkAccountButtonProps> = ({
  url,
  iconSrc,
  iconSrcHover,
  altText,
  buttonClass = "p-1 bg-primary-color border border-black rounded-full transition-all duration-200",
  iconWidth = 30,
  iconHeight = 30,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div>
      <button
        className={`${buttonClass} hover:bg-black` }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center"
        >
          <Image
            src={isHovered ? iconSrcHover : iconSrc} 
            alt={altText}
            width={iconWidth}
            height={iconHeight}
            className="transition-all duration-300 ease-in-out"
          />
        </a>
      </button>
    </div>
  );
};

export default LinkAccountButton;
