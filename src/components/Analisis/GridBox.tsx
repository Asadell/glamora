interface GridBoxProps {
  image: string,
  title: string,
  text: string,
}

const GridBox = ({image, title, text} : GridBoxProps) => {
  return (
    <div className="flex flex-col bg-white p-6 rounded-3xl">
      <div className="bg-softPink p-5 rounded-3xl flex justify-center border border-dustyPink mb-6">
        <img src={image} alt={title} />
      </div>
      <h3 className="mb-3 text-[20px] font-bold bg-darkMocha text-transparent bg-clip-text">{title}</h3>
      <p className="text-base font-normal">{text}</p>
    </div>
  );
}

export default GridBox;