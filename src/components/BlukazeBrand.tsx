import React from "react";

interface BlukazeBrandProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  height?: number | string;
}

export const BlukazeBrand: React.FC<BlukazeBrandProps> = ({
  className = "h-7 text-white",
  height,
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 230 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={height ? { height } : undefined}
      aria-label="Blukaze"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* B - Futuristic geometric B with caps */}
        <path d="M 6 6 H 22 C 28 6 28 19 22 19 H 6 M 6 19 H 24 C 30 19 30 34 24 34 H 6 V 6" />
        <path d="M 2 6 H 6 M 2 34 H 6" strokeWidth="3" />

        {/* L / I - Clean vertical stem */}
        <path d="M 44 6 V 34" />

        {/* U - Smooth rounded trough */}
        <path d="M 62 6 V 23 C 62 31 78 31 78 23 V 6" />

        {/* K - Sharp angle bracket '<' */}
        <path d="M 112 8 L 95 20 L 112 32" />

        {/* A - Upward chevron '^' (A without crossbar) */}
        <path d="M 124 34 L 136 6 L 148 34" />

        {/* Z - Sharp geometric Z */}
        <path d="M 160 6 H 178 L 160 34 H 178" />

        {/* E - Three horizontal parallel bars '≡' */}
        <path d="M 190 8 H 212" />
        <path d="M 190 20 H 212" />
        <path d="M 190 32 H 212" />
      </g>
    </svg>
  );
};

export default BlukazeBrand;
