import { useState } from "react";
import { IPlayer } from "../../assets/utils/interfaces/IPlayer";
import { motion } from "framer-motion";

type Props = {
  player: IPlayer;
  playerIndex: number;
};

const PlayerCard = ({ player, playerIndex }: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className="flex-col border-2 border-gray-300 cursor-pointer  "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        delay: 1 * playerIndex,
      }}
    >
      <div className="flex">
        <img
          src={player.imgUrl}
          alt={player.name}
          className="bg-black p-4  w-full"
        />
        <p
          className={`relative top-2 right-12 text-4xl ${isHovering ? "text-primary" : "text-white"} `}
        >
          {player.jerseyNumber}
        </p>
      </div>
      <div
        className={`flex-col py-6 pl-6  ${isHovering ? "bg-black" : "bg-white"}`}
      >
        <h3 className={`text-3xl font-bold ${isHovering && "text-white"}`}>
          {player.name}
        </h3>
        <h3 className={`text-3xl font-bold ${isHovering && "text-white"}`}>
          {player.lastName}
        </h3>
      </div>
    </motion.div>
  );
};

export default PlayerCard;
