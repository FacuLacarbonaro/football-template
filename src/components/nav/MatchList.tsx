import { MatchItem } from "./MatchItem";

// TO REMOVE, DATA FROM DB
import ManchesterUnited from "../../assets/images/logo.jpeg";
import Arsenal from "../../assets/images/arsenal.png";

// DATA FROM DB
const matchList = [
  {
    id: 1,
    homeTeam: {
      name: "Manchester United",
      urlImage: ManchesterUnited,
      score: 3,
    },
    awayTeam: {
      name: "Arsenal FC",
      urlImage: Arsenal,
      score: 1,
    },
    date: "20-10-25",
    location: "Old Trafford, UK",
  },
  {
    id: 23,
    homeTeam: {
      name: "Manchester United",
      urlImage: ManchesterUnited,
      score: 0,
    },
    awayTeam: {
      name: "Manchester City",
      urlImage: Arsenal,
      score: 1,
    },
    date: "20-10-25",
    location: "Old Trafford, UK",
  },
];

const MatchList = () => {
  return (
    <div className="flex ">
      {matchList.map((match) => {
        return <MatchItem key={match.id} match={match} />;
      })}
    </div>
  );
};

export default MatchList;
