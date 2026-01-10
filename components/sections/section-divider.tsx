import { cn } from "@/components/lib/cn";

type SectionDividerProps = {
  position?: "top" | "bottom";
  fill?: string;
  className?: string;
};

export default function SectionDivider({
  position = "top",
  fill = "#0b0d17",
  className,
}: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-0 right-0 z-0 h-12 md:h-16",
        position === "top"
          ? "top-0 -translate-y-full"
          : "bottom-0 translate-y-full",
        className
      )}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill={fill}
          d="M0,96 C180,120 360,70 560,64 C820,56 1040,110 1440,72 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
