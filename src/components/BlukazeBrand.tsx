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
      viewBox="0 0 234 40"
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
        {/* B (X: 6 to 26) - Height Y: 6 to 34 */}
        <path d="M 6 6 V 34" />
        <path d="M 6 6 H 16 A 7 7 0 0 1 16 20 H 6" />
        <path d="M 6 20 H 16 A 7 7 0 0 1 16 34 H 6" />

        {/* L (X: 38 to 56) - Height Y: 6 to 34 */}
        <path d="M 38 6 V 34 H 56" />

        {/* U (X: 68 to 90) - Perfectly Symmetrical Arc Height Y: 6 to 34 */}
        <path d="M 68 6 V 23 A 11 11 0 0 0 90 23 V 6" />

        {/* K (X: 102 to 124) - Height Y: 6 to 34 */}
        <path d="M 102 6 V 34" />
        <path d="M 124 6 L 102 20 L 124 34" />

        {/* A (X: 136 to 158) - Height Y: 6 to 34 */}
        <path d="M 136 34 L 147 6 L 158 34" />

        {/* Z (X: 170 to 192) - Height Y: 6 to 34 */}
        <path d="M 170 6 H 192 L 170 34 H 192" />

        {/* E (X: 204 to 226) - Height Y: 6 to 34 */}
        <path d="M 204 6 H 226" />
        <path d="M 204 20 H 226" />
        <path d="M 204 34 H 226" />
      </g>
    </svg>
  );
};

export default BlukazeBrand;
