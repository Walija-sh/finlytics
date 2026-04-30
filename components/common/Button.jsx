import Link from "next/link";

export default function Button({
  children,
  variant = "primary",
  href,
  external = false,
  
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) {
  const base =
    "w-fit  rounded-[13px] transition-all duration-300 text-center text-[16px] md:text-[18px] ";

  const variants = {
    primary:
      "bg-linear-90 from-secondary to-[#ff5015] hover:from-[#ff5015] hover:to-secondary  text-white border border-white py-2 px-10 min-w-[1.8em]",
    secondary:
      "bg-secondary text-white hover:bg-secondary/90 active:scale-95 shadow-lg shadow-secondary/30",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95",
    ghost:
      "text-primary hover:bg-primary/10 active:scale-95",
  };

 

  const classes = `${base} ${variants[variant]}  ${className}`;



  const content = (
    <>
      {children}
     
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
        className={`group ${classes} inline-block`}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${classes}`}
      {...props}
    >
      {content}
    </button>
  );
}