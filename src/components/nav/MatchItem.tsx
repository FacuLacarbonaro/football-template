
// DATA FROM DB, TO REMOVE
import CupLogo from "../../assets/images/cupLogo.png";

type Props = {
  match: {
    id: number;
    homeTeam: {
      name: string;
      urlImage: string;
      score: number;
    };
    awayTeam: {
      name: string;
      urlImage: string;
      score: number;
    };
    date: string;
    location: string;
  };
};

export const MatchItem = ({ match }: Props) => {
  return (
    <div className="bg-gray-100 w-96 mr-4 rounded-sm" key={match.id}>
      <img src={CupLogo} alt="Logo cup" className=" mx-auto pt-4 w-8" />

      <div className="flex items-center justify-around px-4 ">
        {/* Home Team */}
        <div className="justify-center w-1/3 pt-4">
          <img
            src={match.homeTeam.urlImage}
            alt="Home team"
            className="h-14 m-auto"
          />
          <p className="text-sm mt-2 text-center">{match.homeTeam.name}</p>
        </div>
        {/* Score */}
        <div className="bg-gray-800 w-1/3 text-center h-10 content-center rounded">
          <p className="font-bold text-3xl text-white">
            {match.homeTeam.score} - {match.awayTeam.score}
          </p>
          <p></p>
        </div>
        {/* Away Team  */}
        <div className=" justify-center w-1/3 mt-4">
          <img
            src={match.awayTeam.urlImage}
            alt="away team"
            className="h-[56px] w-[56px] m-auto"
          />
          <p className="text-sm text-center mt-2">{match.awayTeam.name}</p>
        </div>
      </div>
      <div className="flex justify-center ">
        <p className="text-center font-thin m-2 w-fit text-sm">{match.date}</p>
        <p className="text-center font-thin m-2 w-fit text-sm">
          {match.location}
        </p>
      </div>
    </div>
  );
};
