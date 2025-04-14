import clsx from "clsx";

const sizeMap: Record<string, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-4",
  lg: "h-10 w-10 border-4",
};

export default function LoadingSpinner({ size = "md", className = "" }) {
  return (
    <div
      className={clsx(
        "animate-spin rounded-full border-t-transparent border-solid",
        sizeMap[size],
        className
      )}
      role="status"
    />
  );
}
