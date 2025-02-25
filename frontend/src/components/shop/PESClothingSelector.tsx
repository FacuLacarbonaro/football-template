import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import { motion } from "motion/react";

interface ProgressBarProps {
  selectedIndex: number;
  totalItems: number;
  setSelectedIndex: (index: number) => void;
}

type Clothing = {
  id: number;
  kitImgURl: string;
  name: string;
  shortsImgURl: string;
};

interface Props {
  clothing: Clothing[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  selectedIndex,
  totalItems,
  setSelectedIndex,
}) => {
  const getColorForIndex = (index: number): string => {
    if (index === 0) {
      return "bg-primary"; //Home color
    } else if (index === 1) {
      return "bg-blue-900"; // Away Color
    } else if (index === 2) {
      return "bg-black"; // Third color
    } else {
      return "bg-gray-300"; // Default
    }
  };

  return (
    <div className="flex justify-center items-center space-x-2 my-4">
      {[...Array(totalItems)].map((_, index) => (
        <div
          key={index}
          className={`w-10 h-2 bg-blue cursor-pointer rounded-full z-20 ${
            index === selectedIndex ? getColorForIndex(index) : "bg-gray-300"
          }`}
          onClick={() => setSelectedIndex(index)}
        ></div>
      ))}
    </div>
  );
};
const PESClothingSelector = ({ clothing }: Props) => {
  const [selectKit, setSelectKit] = useState(0);
  const [selectShort, setSelectShort] = useState(0);

  const handleNextKit = () => {
    setSelectKit((prevIndex) => (prevIndex + 1) % clothing.length);
  };

  const handlePreviousKit = () => {
    setSelectKit(
      (prevIndex) => (prevIndex - 1 + clothing.length) % clothing.length
    );
  };

  const handleNextShort = () => {
    setSelectShort((prevIndex) => (prevIndex + 1) % clothing.length);
  };

  const handlePreviousShort = () => {
    setSelectShort(
      (prevIndex) => (prevIndex - 1 + clothing.length) % clothing.length
    );
  };

  return (
    <div className="mb-20 flex flex-col items-center justify-center">
      {/* Contenedor principal para ambos selectores */}
      <div className="flex flex-col items-center">
        {/* Contenedor del Kit */}
        <div className="flex items-center">
          {/* Flecha izquierda del kit */}
          <CircleArrowLeft
            onClick={handlePreviousKit}
            className="cursor-pointer"
            size={32}
          />
          {/* Imagen y nombre del kit */}
          <div className="flex flex-col items-center mx-4">
            <h2 className="text-xl text-center">
              {clothing[selectKit].name} Jersey
            </h2>
            <ProgressBar
              selectedIndex={selectKit}
              totalItems={clothing.length}
              setSelectedIndex={setSelectKit}
            />
            <div className="h-[384px]">
              <AnimatePresence>
                <motion.img
                  src={clothing[selectKit].kitImgURl}
                  alt={clothing[selectKit].name}
                  className="w-96 mt-[-40px]"
                  key={clothing[selectKit].id}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                />
              </AnimatePresence>
            </div>
          </div>
          {/* Flecha derecha del kit */}
          <CircleArrowRight
            onClick={handleNextKit}
            className="cursor-pointer text-black"
            size={32}
          />
        </div>

        {/* Contenedor del Short */}
        <div className="flex items-center mt-[-40px] ml-2">
          {/* Flecha izquierda del short */}
          <CircleArrowLeft
            onClick={handlePreviousShort}
            className="cursor-pointer"
            size={32}
          />
          {/* Imagen y nombre del short */}
          <div className="flex flex-col items-center mx-20 ">
            <div className="h-[240px]">

            <AnimatePresence>
              <motion.img
                src={clothing[selectShort].shortsImgURl}
                alt={clothing[selectShort].name}
                className="w-64 mt-[-30px]"
                key={clothing[selectShort].id}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              />
            </AnimatePresence>
            </div>
            <h2 className="text-xl text-center mt-[-20px]">
              {clothing[selectShort].name} Short
            </h2>
            <ProgressBar
              selectedIndex={selectShort}
              totalItems={clothing.length}
              setSelectedIndex={setSelectShort}
            />
          </div>
          {/* Flecha derecha del short */}
          <CircleArrowRight
            onClick={handleNextShort}
            className="cursor-pointer text-black"
            size={32}
          />
        </div>
      </div>
    </div>
  );
};

export default PESClothingSelector;
