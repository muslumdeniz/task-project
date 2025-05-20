import classNames from "classnames";
import Icons from "../icons";
import type { IconTypes } from "../icons/_model";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
  prefixIcon?: IconTypes;
  suffixIcon?: IconTypes;
  variant?: "primary" | "outline" | "bare";
  size?: "xs" | "sm" | "base" | "lg";
  color?: "primary" | "gray";
  isRounded?: boolean;
  isIconButton?: boolean;
  className?: string;
  iconSize?: number;
};

const Button = ({
  label,
  prefixIcon,
  suffixIcon,
  variant = "primary",
  size = "base",
  color = "primary",
  isRounded,
  isIconButton,
  className,
  iconSize,
  children,
  ...props
}: Props) => {
  const calculatedIconSize =
    iconSize ??
    (size === "lg" ? 18 : size === "base" ? 16 : size === "sm" ? 14 : 12);

  const buttonVariant = {
    variant: {
      primary: "text-white",
      outline: "bg-transparent border",
      bare: "", // tamamen çerçevesiz / arka plansız
    },
    size: {
      icon: {
        xs: "p-1",
        sm: "p-1",
        base: "p-2",
        lg: "p-3 body-sm-semibold",
      },
      label: {
        xs: "text-xs py-0.5 px-2",
        sm: "py-1.5 px-4",
        base: "py-4 px-8",
        lg: "py-4 px-8 body-sm-semibold",
      },
    },
    color: {
      primary: {
        primary: "bg-primary",
        outline: "text-primary border-primary hover:bg-primary/5",
        bare: "",
      },
      gray: {
        primary: "bg-gray",
        outline: "text-gray-700 border border-gray-300 hover:bg-gray-50",
        bare: "",
      },
    },
  };

  return (
    <button
      className={classNames(
        "flex items-center cursor-pointer transition-all h-fit",
        buttonVariant.variant[variant],
        buttonVariant.size[!isIconButton && label ? "label" : "icon"][size],
        buttonVariant.color[color][variant],
        isIconButton ? "gap-1 border-none" : "gap-2.5",
        isRounded ? "rounded-full" : "rounded-md",
        className
      )}
      {...props}
    >
      {prefixIcon && <Icons name={prefixIcon} size={calculatedIconSize} />}
      {label}
      {suffixIcon && <Icons name={suffixIcon} size={calculatedIconSize} />}
    </button>
  );
};

export { Button };
