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
    title: "Warna Rambut",
    prefix: "hair",
    items: [
        {
            title: "Garnet Red",
            image: "hair_garnet_red.svg",
        },
        {
            title: "Ginger Red",
            image: "hair_ginger_red.svg",
        },
        {
            title: "Light Blonde",
            image: "hair_light_blonde.svg",
        },
        {
            title: "Light Brown",
            image: "hair_light_brown.svg",
        },
        {
            title: "Medium Brown",
            image: "hair_medium_brown.svg",
        },
        {
            title: "Neutral Blonde",
            image: "hair_neutral_blonde.svg",
        },
    ],
  },
  {
    title: "Makeup",
    prefix: "makeup",
    items: [
        {
            title: "Dolly",
            image: "makeup_dolly.svg",
        },
        {
            title: "Glam",
            image: "makeup_glam.svg",
        },
        {
            title: "Hippie",
            image: "makeup_hippie.svg",
        },
        {
            title: 'Monochromatic',
            image: "makeup_monochromatic.svg",
        },
        {
            title: "Soft Glam",
            image: "makeup_soft_glam.svg",
        }
    ],
  },
];
