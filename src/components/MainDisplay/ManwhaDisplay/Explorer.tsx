import axios from "axios";

const Explorer = () => {
  axios
    .get("http://127.0.0.1:9000/api/data")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return <div>Explorer</div>;
};

export default Explorer;
