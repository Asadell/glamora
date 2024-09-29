import { Bubble, BucketCircle, Drop, EmojiNormal } from "iconsax-react";
import moment from "moment";

export default function WeeklyProgress() {
  function getRandomBoolean() {
    return Math.random() < 0.5;
  }

  const categories = [
    {
      icon: <EmojiNormal size="32" variant="Bold" />,
      label: "Tipe",
      labelSlug: "type",
    },
    {
      icon: <Drop size="32" variant="Bold" />,
      label: "Kelembapan",
      labelSlug: "moist",
    },
    {
      icon: <BucketCircle size="32" variant="Bold" />,
      label: "Sebum",
      labelSlug: "sebum",
    },
    {
      icon: <Bubble size="32" variant="Bold" />,
      label: "Pori-pori",
      labelSlug: "pores",
    },
  ];
  const progress = [];

  for (let i = 0; i < 7; i++) {
    progress.push({
      date: new Date(new Date().setDate(new Date().getDate() - i)),
      type: getRandomBoolean(),
      moist: getRandomBoolean(),
      sebum: getRandomBoolean(),
      pores: getRandomBoolean(),
    });
  }

  progress.reverse();
  return (
    <div className="reveal">
      <h2 className="text-xl font-bold bg-deepTeal text-transparent bg-clip-text text-center mb-6">
        Progress Mingguan
      </h2>

      <div className="flex gap-6 w-full">
        <div>
          {categories.map((item) => {
            return (
              <div className="flex gap-4 mt-7 items-center">
                <div className="text-softIndigo">{item.icon}</div>
                <div className="font-light text-xl">{item.label}</div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="grid grid-cols-7 gap-2 w-full">
            {progress.map((item: any) => {
                let formattedDate = moment(item.date).format('D MMM');

              return (
                <div className="flex items-center flex-col gap-4">
                    <div className="text-xs text-center text-slateStorm">{formattedDate}</div>
                  {categories.map((category: any) => {
                    const bgColor =
                      item[category.labelSlug].toString() === "true"
                        ? "bg-success-300"
                        : "bg-danger-300";
                    return <div className={`p-5 rounded-md ${bgColor}`}></div>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
