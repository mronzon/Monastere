import { useEffect, useState } from "react";
import { AbsoluteCenter, Image } from "@chakra-ui/react";
import axios from "axios";

const ImageViewer = () => {
  const [chapterImage, setChapterImage] = useState([]);
  const [chapter, setChapter] = useState("");

  useEffect(() => {
    const link = localStorage.getItem("chapterLink");
    const number = localStorage.getItem("chapterNumber");
    if (link !== null && number !== null) {
      setChapter(link);
      const json = JSON.stringify({
        url: link,
        chapter: number,
        source: "Asura",
      });
      axios
        .post("http://127.0.0.1:8000/api/get-images-chapter", json, {
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
