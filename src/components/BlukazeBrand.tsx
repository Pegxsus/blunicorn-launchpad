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
      viewBox="0 0 240 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={height ? { height } : undefined}
      aria-label="Blukaze"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* B (X: 6 to 28) - Uniform height Y: 6 to 34 */}
        <path d="M 6 6 V 34" />
        <path d="M 6 6 H 20 C 26 6 26 20 20 20 H 6" />
        <path d="M 6 20 H 21 C 27.5 20 27.5 34 21 34 H 6" />

        {/* L (X: 40 to 58) - Uniform height Y: 6 to 34 */}
        <path d="M 40 6 V 34 H 58" />

        {/* U (X: 70 to 92) - Uniform height Y: 6 to 34 */}
        <path d="M 70 6 V 23 C 70 34 92 34 92 23 V 6" />

        {/* K (X: 104 to 126) - Uniform height Y: 6 to 34 */}
        <path d="M 104 6 V 34" />
        <path d="M 126 6 L 105 20 L 126 34" />

        {/* A (X: 138 to 160) - Uniform height Y: 6 to 34 */}
        <path d="M 138 34 L 149 6 L 160 34" />

        {/* Z (X: 172 to 194) - Uniform height Y: 6 to 34 */}
        <path d="M 172 6 H 194 L 172 34 H 194" />

        {/* E (X: 206 to 228) - Uniform height Y: 6 to 34 */}
        <path d="M 206 6 H 228" />
        <path d="M 206 20 H 228" />
        <path d="M 206 34 H 228" />
      </g>
    </svg>
  );
};

export default BlukazeBrand;
