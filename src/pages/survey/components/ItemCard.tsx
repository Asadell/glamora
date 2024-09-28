interface ItemCardProps {
  title: string;
  image: string;
  isActive: boolean;
  onClick?: () => void;
  additionalClass?: string;
}

export default function ItemCard({
  ...props
}: ItemCardProps) {
  const bgColor = props.isActive ? "bg-accent-100" : "bg-grey-100";
  const borderColor = props.isActive ? "accent-200" : "grey-100";
  const textColor = props.isActive ? 'text-accent-700' : 'text-grey-500';

  return (
    <div>
      <div
      className={`w-full h-full border-4 rounded-xl flex justify-center items-center cursor-pointer border-${borderColor} ${bgColor}`}
      onClick={props.onClick}
    >
      <img
        src={`/src/assets/items/${props.image}`}
        alt={props.title}
        className={`w-full h-28 ${props.additionalClass ?? 'object-cover'} rounded-xl`}
      />
      
    </div>
    <p className={`my-2 text-lg ${textColor} ${props.isActive ? 'font-bold' : ''}`}>{props.title}</p>
    </div>
  );
}
