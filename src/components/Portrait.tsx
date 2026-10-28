import { practice } from "../config";

type PortraitProps = {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

/**
 * Real professional photography only. When no approved file is present,
 * a calm placeholder is shown — never an AI-generated likeness.
 */
export function Portrait({
  className = "",
  width = 900,
  height = 1100,
  priority = false,
}: PortraitProps) {
  if (practice.portraitAvailable) {
    return (
      <img
        className={className}
        src={practice.portrait}
        alt={practice.portraitAlt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    );
  }

  return (
    <div className={`hero__placeholder ${className}`.trim()} role="img" aria-label="[Professional Photograph] — to be supplied">
      <span className="hero__placeholder-mark" aria-hidden="true" />
      <p>
        {practice.name}
        <span>Professional photograph</span>
      </p>
    </div>
  );
}
