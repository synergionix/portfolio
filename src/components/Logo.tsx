type LogoProps = {
  className?: string;
  isFooter?: boolean;
};

const Logo = ({ className = "h-10 w-auto", isFooter = false }: LogoProps) => {
  const fillColor = isFooter ? "#FFFFFF" : "#60A5FA";
  const strokeColor = isFooter ? "#FFFFFF" : "#2563EB";

  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Synergy Icon with closer, overlapping hexagons */}
      <g transform="translate(10,15) scale(0.8)">
        <polygon
          points="10,0 30,0 40,17.32 30,34.64 10,34.64 0,17.32"
          fill={fillColor}
        />
        <polygon
          points="25,0 45,0 55,17.32 45,34.64 25,34.64 15,17.32"
          fill={fillColor}
          opacity="0.7"
        />
        <polygon
          points="40,0 60,0 70,17.32 60,34.64 40,34.64 30,17.32"
          fill={fillColor}
          opacity="0.4"
        />
      </g>

      {/* Brand Name moved closer to the left (to about x=80) */}
      <text
        x="70"
        y="35"
        fontSize="20"
        fontWeight="700"
        fill={fillColor}
        fontFamily="Inter, sans-serif"
      >
        Synergionix
      </text>
    </svg>
  );
};

export default Logo;
