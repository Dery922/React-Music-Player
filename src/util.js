import { v4 as uuidv4 } from "uuid";

//a function with an arraw of objects which will be exported and use as states

function chillHop() {
  return [
    {
      name: "Beaver Creak",
      cover: "https//chillhop.com",
      artist: "Aso, Middle School, ",
      audio: "../assets/me.mp3",
      color: ["#2ab3bf", "#205950"],
      id: uuidv4(),
      active: true,
    },
  ];
}

export default chillHop;
