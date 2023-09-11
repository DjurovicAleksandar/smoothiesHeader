import redSmoothe from "../../assets/img/smoothie/redSmoothe.png";
import yellowSmoothie from "../../assets/img/smoothie/yellowSmoothie.png";
import greenSmoothie from "../../assets/img/smoothie/greenSmoothie.png";
import purpleSmoothie from "../../assets/img/smoothie/purpleSmoothie.png";

import greenIcon from "../../assets/img/icons/greenIcon.png";
import purpleIcon from "../../assets/img/icons/purpleIcon.png";
import redIcon from "../../assets/img/icons/redIcon.png";
import yellowIcon from "../../assets/img/icons/yellowIcon.png";

import avocado from "../../assets/img/backgrounds/avocado.png";
import berries from "../../assets/img/backgrounds/berries.png";
import blueberries from "../../assets/img/backgrounds/blueberries.png";
import mango from "../../assets/img/backgrounds/mango.png";
import strawberry from "../../assets/img/backgrounds/strawberry.png";

export const smoothies = [
  {
    className: "top-[25%] -left-[100px]",
    src: redSmoothe,
    alt: "red",
  },
  {
    className: "left-[25%] -bottom-[100px]",
    src: yellowSmoothie,
    alt: "yellow",
  },
  {
    className: "top-[25%] -right-[100px]",
    src: greenSmoothie,
    alt: "green",
  },
  {
    className: "-top-[100px] left-[25%]",
    src: purpleSmoothie,
    alt: "purple",
  },
];

export const buttonData = [
  [redIcon, 0, "red"],
  [yellowIcon, 90, "yellow"],
  [greenIcon, 180, "green"],
  [purpleIcon, 270, "purple"],
];

export const bgObjectImages = [
  {
    src: avocado,
    alt: "avocado",
    smoothie: "green",
  },
  {
    src: avocado,
    alt: "avocado",
    smoothie: "green",
  },
  {
    src: strawberry,
    alt: "strawberry",
    smoothie: "red",
  },
  {
    src: blueberries,
    alt: "blueberries",
    smoothie: "red",
  },
  {
    src: mango,
    alt: "mango",
    smoothie: "yellow",
  },
  {
    src: berries,
    alt: "berries",
    smoothie: "purple",
  },
];

export const backgroundColors = [
  "rgb(255,99,77)", // red
  "rgb(255,214,0)", // yellow
  "rgb(206,223,83)", // green
  "rgb(250,173,181)", //purple
];

export const textColors = [
  "rgb(255,214,0)", // yellow
  "rgb(255,99,77)", // red
  "rgb(250,173,181)", //purple
  "rgb(206,223,83)", // green
];
