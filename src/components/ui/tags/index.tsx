import classNames from "classnames";

type Props = {
  label: string;
  color?: "green" | "red" | "blue";
  className?: string;
  isRounded?: boolean;
};

const Tag = ({ label, color = "green", className }: Props) => {
  const colorStyles = {
    green: "bg-tag-green text-tag-tx-green",
    red: "bg-tag-red text-tag-tx-red",
    blue: "bg-tag-blue text-tag-tx-blue",
  };

  return (
    <span
      className={classNames(
        "inline-flex items-center px-2 font-medium text-xs h-6 rounded-sm ring-1 ring-gray-500/10 ring-inset",
        colorStyles[color],

        className
      )}
    >
      {label}
    </span>
  );
};

export { Tag };
