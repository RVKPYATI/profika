interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "blue" | "white";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "blue",

  className = "",
  ...props
}) => {
  const variants = {
    blue: "bg-blue text-white hover:bg-white hover:text-gray-colored",
    white: "bg-white text-gray-colored hover:text-blue",
  };

  const variantStyles = variants[variant] || variants.blue;

  return (
    <button
      className={`w-[317px] py-4 rounded-[100px] xl:text-xl font-medium border-blue border-[2px]  ${variantStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
