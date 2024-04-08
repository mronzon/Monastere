import { Image } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  src: string;
  boxSize: string;
}

const ImageCustom = ({ src, boxSize }: Props) => {
  const [image, setImage] = useState("");
  const instance = axios.create();
  instance.defaults.headers.common["User-Agent"] =
    "Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148";
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(src); // Remplacez l'URL par celle de votre image
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération de l'image");
        }
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImage(url);
      } catch (error) {
        console.error("Erreur:", error);
      }
    };
    fetchImage();
  }, []);

  return <img src={image} boxSize={boxSize} />;
};

export default ImageCustom;
