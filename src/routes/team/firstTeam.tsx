import { createFileRoute } from "@tanstack/react-router";
import PlayerCard from "../../components/team/PlayerCard";
import { playerList } from "../../assets/utils/mocks/playerList";
import BrandFooterRow from "../../components/common/BrandFooterRow";
import Footer from "../../components/common/Footer";
import { IPlayer } from "../../assets/utils/interfaces/IPlayer";
import { motion } from "framer-motion";

export const Route = createFileRoute("/team/firstTeam")({
  component: RouteComponent,
});

function RouteComponent() {
  // Group players by position
  const groupedPlayers = playerList.reduce<{ [key: string]: IPlayer[] }>(
    (acc, player) => {
      const { position } = player;

      // If position exists
      if (!acc[position]) {
        acc[position] = [];
      }
      acc[position].push(player);

      return acc;
    },
    {}
  );

  // Position List
  const positions = ["goalkeeper", "defender", "midfielder", "forward"];

  return (
    <div>
      {/* HEADER */}
      <div className="flex py-10">
        <h2 className="text-primary text-center w-[90%] mx-auto text-5xl font-bold tracking-wide border-b-2 pb-2 border-gray-200">
          PLAYERS
        </h2>
      </div>

      {/* PLAYER LIST */}
      <div className="flex-col w-2/3 mx-auto p-6">
        {positions.map((position) => {
          const playersInPosition = groupedPlayers[position];

          if (!playersInPosition) return null; // If player dont exist with this position

          return (
            <div key={position} className="grid gap-6">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                }}
              >
                <h3 className="text-3xl text-center uppercase font-bold  tracking-wide text-gray-400">{position}s</h3>
              </motion.div>
              <div className="grid grid-cols-4 grid-flow-row col-span-1 gap-6 w-full py-6">
                {playersInPosition.map((player, index) => (
                  <div key={player.id}>
                    <PlayerCard player={player} playerIndex={index} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* END PLAYER LIST */}
      <BrandFooterRow />
      <Footer />
    </div>
  );
}
