import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import FixtureComponent from "../components/fixture/FixtureComponent";
import TableComponent from "../components/table/TableComponent";
import ResultsComponent from "../components/results/ResultsComponent";
import BrandFooterRow from "../components/common/BrandFooterRow";
import Footer from "../components/common/Footer";

export const Route = createFileRoute("/fixture")({
  component: RouteComponent,
});

const competitionFilter = [
  {
    id: 1,
    displayText: "Premier League",
    path: "",
  },
  {
    id: 2,
    displayText: "FA CUP",
    path: "",
  },
  {
    id: 3,
    displayText: "FA Community Shield",
    path: "",
  },
  {
    id: 4,
    displayText: "Europa League",
    path: "",
  },
  {
    id: 5,
    displayText: "Friendly Matches",
    path: "",
  },
];

const dataFilterTypeEnum = {
  Fixture: 1,
  Results: 2,
  Table: 3,
};

function RouteComponent() {
  const [filter, setFilter] = useState(1);
  const [dataFilterType, setDataFilterType] = useState(1);

  return (
    <div>
      {/*competition filter */}
      <div>
        <div className="flex justify-start p-6">
          {competitionFilter.map((competition) => {
            return (
              <Link
                to={competition.path}
                className={`mr-4 px-2  ${filter === competition.id ? "border-b-4 border-primary" : "hover:border-b-gray-400 hover:border-b-4 text-gray-400"}`}
                onClick={() => setFilter(competition.id)}
                key={competition.id}
              >
                {competition.displayText}
              </Link>
            );
          })}
        </div>

        {/* Fixture-Result-table filter Selector */}

        <div className=" bg-black h-16">
          <div className="flex justify-start h-full items-end ">
            {/* Genre Selector */}

            <div>
              <p className="text-gray-200 text-3xl pl-28 pb-4">MEN</p>
            </div>

            {/* Data type selector */}

            <div className="flex mx-auto gap-6">
              <div>
                <p
                  className={`text-xl h-10 p-2 flex text-center my-auto cursor-pointer rounded-t ${dataFilterType === dataFilterTypeEnum.Fixture ? "bg-white text-black" : "text-gray-200"}`}
                  onClick={() => setDataFilterType(1)}
                >
                  Fixture
                </p>
              </div>
              <div>
                <p
                  className={`text-xl h-10 p-2 flex text-center my-auto cursor-pointer rounded-t ${dataFilterType === dataFilterTypeEnum.Results ? "bg-white text-black" : "text-gray-200"}`}
                  onClick={() => setDataFilterType(2)}
                >
                  Results
                </p>
              </div>
              <div>
                <p
                  className={`text-xl h-10 p-2 flex text-center my-auto cursor-pointer rounded-t ${dataFilterType === dataFilterTypeEnum.Table ? "bg-white text-black" : "text-gray-200"}`}
                  onClick={() => setDataFilterType(3)}
                >
                  Table
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data body */}

      {dataFilterType === dataFilterTypeEnum.Fixture && <FixtureComponent />}
      {dataFilterType === dataFilterTypeEnum.Results && <ResultsComponent />}
      {dataFilterType === dataFilterTypeEnum.Table && <TableComponent />}

      <BrandFooterRow />

      <Footer />
    </div>
  );
}
