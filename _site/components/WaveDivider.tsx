interface WaveDividerProps {
  fill?: string;
  className?: string;
}

export function WaveDivider({ fill = "#ffffff", className = "" }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="w-full h-14"
        style={{ display: "block", fill }}
      >
        <path d="M0,28 C320,56 640,0 960,28 C1120,42 1280,14 1440,28 L1440,56 L0,56 Z" />
      </svg>
    </div>
  );
}
