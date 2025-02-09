import { Ticket, TicketX } from "lucide-react";
import { formatDate } from "../../assets/utils/formatDate/formatDate";
import { Fixture_mock } from "../../assets/utils/mocks/Fixture_mock";
import { Link } from "@tanstack/react-router";

const FixtureComponent = () => {
  return (
    <div className="py-6 w-2/3 p-28 ">
      {Fixture_mock.map(
        ({
          id,
          monthName,
          homeTeam,
          awayTeam,
          date,
          location,
          ticketsAvaiable,
          competition,
        }) => {
          return (
            <div key={id} className=" py-2 ">
              <h2 className="text-2xl">{monthName}</h2>
              <div className="flex bg-gray-100 my-2 py-2 px-6 text-sm rounded justify-between items-center">
                <p>{formatDate(date, "date")}</p>

                <Link to={`/tickets`} className="cursor-pointer">
                  {ticketsAvaiable ? (
                    <Ticket className="text-green-600" />
                  ) : (
                    <TicketX className="text-red-600" />
                  )}
                </Link>
              </div>

              <div className="flex justify-center text-xs font-bold">
                <p className="text-red-600 text-center">{competition}</p>
              </div>
              <div className="flex justify-center gap-6 ">
                <p className="text-md w-36 text-center">{homeTeam.name}</p>
                <img
                  src={homeTeam.imgUrl}
                  alt={homeTeam.name}
                  className="h-6"
                />

                <div className="text-center">
                  <p>{formatDate(date, "time")}</p>
                  <p className="text-center font-thin">{location}</p>
                </div>

                <img
                  src={awayTeam.imgUrl}
                  alt={awayTeam.name}
                  className="h-6"
                />
                <p className="text-md w-36 text-center">{awayTeam.name}</p>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default FixtureComponent;
