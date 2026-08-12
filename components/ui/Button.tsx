interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-full px-8 py-4 text-[15px] font-medium transition-all duration-300";

  const primary =
    "bg-[#B36A5E] text-white hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(179,106,94,.25)]";

  const secondary =
    "border border-[#B36A5E] text-[#B36A5E] hover:bg-[#B36A5E] hover:text-white hover:-translate-y-1 hover:shadow-lg";

  return (
    <button
      className={`${base} ${
        variant === "primary" ? primary : secondary
      }`}
    >
      {children}
    </button>
  );
}