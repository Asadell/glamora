interface LineInfoBoxProps {
  icon: string,
  bottom: number,
  right?: number,
  left?: number,
}

const LineInfoBox = ({
  icon,
  bottom,
  right,
  left,
}: LineInfoBoxProps) => {
  const style = {
    bottom: `${bottom}px`,
    right: right !== 0 ? `${right}px` : undefined,
    left: left !== 0 ? `${left}px` : undefined,
  };

  return (
    <div className="absolute" style={style}>
      <img src={icon} alt="Line" />
    </div>
  );
}

export default LineInfoBox;