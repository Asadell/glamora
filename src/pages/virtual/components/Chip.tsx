interface ChipProps {
  label: string;
  isActive: boolean;
  isLastElement?: boolean | false;
  isFirstElement?: boolean | false;
  onClick?: () => void;
}

export default function Chip({
  ...props
}: ChipProps) {
  const textColor = props.isActive ? "text-white" : "text-grey-400";
  const bgColor = props.isActive ? "bg-primary-gradient" : "bg-lavenderHue";
  const borderRadiusParent = `${props.isLastElement ? "rounded-r-full" : ""} ${
    props.isFirstElement ? "rounded-l-full" : ""
  }`;
  const borderRadius = props.isActive
    ? "rounded-full"
    : `${
        props.isLastElement
          ? "rounded-r-full"
          : `${props.isFirstElement ? "rounded-l-full" : ""}`
      }`;
  return (
    <div className={`bg-lavenderHue ${borderRadiusParent}`}>
      <div
        onClick={props.onClick}
        className={`py-2 px-6 cursor-pointer text-center ${borderRadius} ${bgColor} ${textColor}`}
      >
        {props.label}
      </div>
    </div>
  );
}
