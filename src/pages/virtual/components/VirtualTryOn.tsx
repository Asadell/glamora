import { useEffect, useRef, useState } from "react";
import Chip from "./Chip";
import PaginationIndicator from "./PaginationIndicator";
import ItemCard from "./ItemCard";
import { TRY_ON_ITEMS, TryOnItem } from "../constants";
import TryOnVideo from "./TryOnVideo";


export default function VirtualTryOn() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedItem, setSelectedItem] = useState(0);
  const [tryOnKey, setTryOnKey] = useState(0);
  const totalPage = 5;

  const items: TryOnItem[] = TRY_ON_ITEMS;

  useEffect(() => {
    setTryOnKey((prev) => prev + 1);  

  }, []);

  const handleSelectedPageClick = (isNext: boolean) => {
    if (isNext) {
      setSelectedPage(selectedPage + 1);
    } else {
      setSelectedPage(selectedPage - 1);
    }
  };

  const handleSelectedCategoryClick = (index: number) => {
    setSelected(index);
    setSelectedItem(0);
  };

  const handleItemSelect = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <div className="container py-16 min-h-screen w-full">
      <h1 className="text-4xl text-center text-deepSlate font-bold">
        Virtual Try-on
      </h1>

      <div className="mt-10 rounded-xl bg-white w-full items-centers justify-center h-full flex lg:flex-row flex-col-reverse">
        <div className="p-6">
          <div className="grid grid-cols-2">
            {items.map((item, index) => {
              return (
                <Chip
                  key={index}
                  isFirstElement={index == 0}
                  isLastElement={index == items.length - 1}
                  isActive={selected == index}
                  onClick={() => handleSelectedCategoryClick(index)}
                  label={item.title}
                />
              );
            })}
          </div>
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
            {items[selected].items.map((item, index) => {
                return (
                    <div>
                      <ItemCard
                        key={index}
                        title={item.title}
                        isActive={selectedItem == index}
                        image={`${items[selected].prefix}/${item.image}`}
                        onClick={() => handleItemSelect(index)}
                      />
                    </div>
                );
            })}
          </div>
          <div className="flex justify-center">
            <PaginationIndicator
              onNextClick={() => handleSelectedPageClick(true)}
              onPreviousClick={() => handleSelectedPageClick(false)}
              currentPage={selectedPage}
              totalPage={totalPage}
            />
          </div>
        </div>
        <div className="w-full" style={{minHeight: "30rem"}} ref={containerRef}>
          <TryOnVideo key={tryOnKey} containerRef={containerRef} selectedItemImage={`${items[selected].prefix}/${items[selected].items[selectedItem].image}`}
          />
        </div>
      </div>
    </div>
  );
}
