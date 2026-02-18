// Inline SVG service icons — fill="currentColor" so color is set via CSS `color`
// Original SVGs had hardcoded fill: #24262c in <style> blocks

interface IconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function BrandingIcon({ size = 90, className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 154.38 154.38"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M154.38,16.35L138.03,0l-41.12,41.12c-15.6-8.54-35.57-6.2-48.78,7.01-13.21,13.21-15.55,33.18-7.01,48.78L0,138.03l16.35,16.35,41.12-41.12c15.6,8.54,35.57,6.21,48.78-7.01,13.21-13.21,15.55-33.18,7.01-48.78l41.12-41.12ZM89.9,89.9c-7.02,7.02-18.41,7.02-25.43,0-7.02-7.02-7.02-18.41,0-25.43s18.41-7.02,25.43,0c7.02,7.02,7.02,18.41,0,25.43Z" />
    </svg>
  );
}

export function MarketingIcon({ size = 90, className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 151.4 150.81"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <polygon points="78.89 15.61 98.6 35.32 0 133.92 16.89 150.81 115.49 52.21 135.79 72.5 151.4 0 78.89 15.61" />
    </svg>
  );
}

export function UXIcon({ size = 90, className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 152 152"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M152,58v-18h-40V0h-18v40h-36V0h-18v40H0v18h40v36H0v18h40v40h18v-40h36v40h18v-40h40v-18h-40v-36h40ZM94,94h-36v-36h36v36Z" />
    </svg>
  );
}

export function WebIcon({ size = 90, className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 152 152"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M152,0H48.46v48.46H0v103.54h103.54v-48.46h48.46V0ZM83.71,132.17H19.83v-63.88h28.64v35.25h35.25v28.64ZM83.71,83.71h-15.42v-15.42h15.42v15.42ZM132.17,83.71h-28.64v-35.25h-35.25v-28.64h63.88v63.88Z" />
    </svg>
  );
}
