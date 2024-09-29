interface CardItem {
  title: string;
  image: string;
}

export interface TryOnItem {
    title: string;
    prefix: string;
    items: CardItem[];
    additionalClass?: string;
}

export const TRY_ON_ITEMS = [
  {
    title: "Kacamata",
    prefix: "glasses",
    additionalClass: "object-contain p-6",
    items: [
      {
        title: "Aviator",
        image: "glasses_aviator.svg",
      },
      {
        title: "Cat Eye",
        image: "glasses_cateye.svg",
      },
      {
        title: "Half Rim",
        image: "glasses_half_rim.svg",
      },
      {
        title: "Hexagonal",
        image: "glasses_hexagonal.svg",
      },
      {
        title: "Round",
        image: "glasses_round.svg",
      },
      {
        title: "Wayfarer",
        image: "glasses_wayfarer.svg",
      },
    ],
  },
  {
    title: "Topi",
    prefix: "hats",
    items: [
        {
            title: "Beret",
            image: "hat_beret.svg",
        },
        {
            title: "Bucket",
            image: "hat_bucket.svg",
        },
        {
            title: "Cap",
            image: "hat_cap.svg",
        },
        {
            title: "Felted",
            image: "hat_felted.svg",
        },
        {
            title: "Straw",
            image: "hat_straw.svg",
        },
        {
            title: "Visor",
            image: "hat_visor.svg",
        },
    ],
  },

];
// sumber foto dari 'H&M'