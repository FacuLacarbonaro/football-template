import FrontKit from "../../assets/images/frontKit.jpg";
import ShortsHome from "../../assets/images/shortsHome.jpg";
import ShortsAway from "../../assets/images/shortsAway.jpg";
import awayKit from "../../assets/images/awayKit.jpg";
import thirdKit from "../../assets/images/thirdKit.jpg";
import thirdShort from "../../assets/images/thirdShort.jpg";
import PESClothingSelector from "./PESClothingSelector";

type Kit = {
  id: number;
  kitImgURl: string;
  name: string;
  shortsImgURl: string;
};

const kits: Kit[] = [
  {
    id: 1,
    kitImgURl: FrontKit,
    shortsImgURl: ShortsHome,
    name: "Home",
  },
  {
    id: 2,
    kitImgURl: awayKit,
    shortsImgURl: ShortsAway,
    name: "Away",
  },
  {
    id: 3,
    kitImgURl: thirdKit,
    shortsImgURl: thirdShort,
    name: "Third",
  },
];

const KitSelector = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-col w-[50%]">
        <PESClothingSelector clothing={kits} />
      </div>
    </div>
  );
};

export default KitSelector;
