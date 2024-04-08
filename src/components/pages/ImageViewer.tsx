import { useEffect, useState } from "react";
import { AbsoluteCenter, Image } from "@chakra-ui/react";
import axios from "axios";

const ImageViewer = () => {
  const [chapterImage, setChapterImage] = useState([]);
  const [chapter, setChapter] = useState("");

  useEffect(() => {
    const elt = localStorage.getItem("chapter");
    if (elt !== null) {
      setChapter(elt);
      const json = JSON.stringify({
        url: elt,
        source: "Asura",
      });
      axios
        .post("http://127.0.0.1:9000/api/get-images-chapter", json, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          setChapterImage(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const nextChapter = (e: any) => {
    console.log("Next Chapter !");
  };

  return (
    <AbsoluteCenter axis="horizontal">
      <div>
        {chapterImage.map((item, index) => (
          <Image
            src={item}
            key={index}
            onScroll={(event) => console.log(event)}
          />
        ))}
      </div>
    </AbsoluteCenter>
  );
};

export default ImageViewer;
