import { ArrowLeft, ArrowRight } from "iconsax-react";

interface PaginationIndicatorProps {
  currentPage: number;
  totalPage: number;
  onPreviousClick?: () => void;
  onNextClick?: () => void;
}

export default function PaginationIndicator({
  currentPage,
  totalPage,
  onPreviousClick,
  onNextClick,
}: PaginationIndicatorProps) {
  const leftBgColor =
    currentPage === 1 ? "bg-grey-300" : "bg-primary-gradient cursor-pointer";
  const rightBgColor =
    currentPage === totalPage
      ? "bg-grey-300"
      : "bg-primary-gradient cursor-pointer";
  return (
    <div className="flex gap-4 items-center">
      <div
        onClick={() => {
          if (currentPage !== 1 && onPreviousClick !== undefined) {
            onPreviousClick();
          }
        }}
        className={`p-2 rounded-full ${leftBgColor}`}
      >
        <ArrowLeft size="16" color="white" />
      </div>
      <p>{currentPage}</p>
      <div
        onClick={() => {
          if (currentPage !== totalPage && onNextClick !== undefined) {
            onNextClick();
          }
        }}
        className={`p-2 rounded-full ${rightBgColor}`}
      >
        <ArrowRight size="16" color="white" />
      </div>
    </div>
  );
}
