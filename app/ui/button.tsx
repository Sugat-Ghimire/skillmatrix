import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex h-9 items-center rounded-lg bg-slate-500 px-4 text-md font-medium text-white transition-colors hover:bg-slate-400",
        className
      )}
    >
      {children}
    </button>
  );
}
