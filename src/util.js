import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Delicate",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/02/ef337196272ee56d2e76383d39ed446b57472aec-1024x1024.jpg",
      artist: "Middle School",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49367",
      color: ["#938441", "#FCDD48"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cabriolet",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/02/492202568b0d18312224043686735f7f1a47f67b-1024x1024.jpg",
      artist: "Ben Bada Boom, Plusma",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=55310",
      color: ["#E3E3BD", "#D2C35B"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;