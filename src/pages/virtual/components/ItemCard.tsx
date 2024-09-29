interface ItemCardProps {
  title: string;
  image: string;
  isActive: boolean;
  onClick?: () => void;
}

export default function ItemCard({
  title,
  image,
  isActive,
  onClick,
}: ItemCardProps) {
  const bgColor = isActive ? "bg-accent-100" : "bg-grey-100";
  const borderColor = isActive ? "accent-200" : "grey-100";
  const textColor = isActive ? 'text-accent-700' : 'text-grey-500';

  const imgSrc = `/src/assets/items/${image}`;
  const img = new Image();
  img.src = imgSrc;

  return (
    <div>
      <div
        className={`w-full h-full border-4 rounded-xl flex justify-center items-center cursor-pointer border-${borderColor} ${bgColor}`}
        onClick={onClick}
      >
        <img
          src={imgSrc}
          alt={title}
          className={`w-full h-28 object-contain rounded-xl`}
        />
      </div>
      <p className={`my-2 text-lg text-center ${textColor} ${isActive ? 'font-bold' : ''}`}>{title}</p>
    </div>
  );
}
