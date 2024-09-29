interface InfoBoxProps {
  icon: string,
  alt: string,
  title: string,
  text: string,
  bottom: number,
  right?: number,
  left?: number,
}

const InfoBox = ({
  icon,
  alt,
  title,
  text,
  bottom,
  right,
  left,
}: InfoBoxProps) => {
  const style = {
    bottom: `${bottom}px`,
    right: right !== 0 ? `${right}px` : undefined,
    left: left !== 0 ? `${left}px` : undefined,
  };

  return (
    <div className="py-4 px-5 flex flex-col absolute bg-white rounded-xl" style={style}>
      <div className="flex flex-row gap-[6px]">
        <img src={icon} alt={alt} />
        <span className="font-bold text-base bg-primary-gradient text-transparent bg-clip-text">{title}</span>
      </div>
      <span className="font-normal text-lg">{text}</span>
    </div>
  );
}

export default InfoBox;