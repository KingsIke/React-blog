import { TailSpin } from "react-loading-icons";
const Loading = () => {
  return (
    <div className="icons-react">
      <TailSpin
        stroke="blue"
        heigth={800}
        width={456}
        speed={0.5}
        strokeOpacity={1}
      />
    </div>
  );
};

export default Loading;
