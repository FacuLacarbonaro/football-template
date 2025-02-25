import { premierLeagueTeams } from "../../assets/utils/mocks/TableData_mock";

const COLUMNS = ["Position", "Team", "P", "W", "D", "L", "F", "A", "GD", "PTS"];

const TableComponent = () => {
  return (
    <div>
      <div className="relative flex mx-auto my-6 flex-col w-2/3 h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        {/* TABLE */}

        <table className="w-full text-left table-auto min-w-max">
          {/* TABLE HEAD */}
          <thead>
            <tr>
              {COLUMNS.map((displayColumnText, i) => {
                return (
                  <th
                    className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
                    key={i}
                  >
                    <p className="block text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      {displayColumnText}
                    </p>
                  </th>
                );
              })}
            </tr>
          </thead>

          {/* TABLE BODY  */}
          <tbody>
            {/* TODO: Need to fix data, need comes without id for mapping */}
            {premierLeagueTeams.map(({ id, ...restOfEntries }) => {
              const { imgURL } = restOfEntries;

              Reflect.deleteProperty(restOfEntries, "id");
              Reflect.deleteProperty(restOfEntries, "imgURL");

              return (
                <tr key={id}>
                  {Object.entries(restOfEntries).map(([key, values], index) => {
                    return (
                      <td
                        className="p-4 border-b border-blue-gray-50"
                        key={index}
                      >
                        <p className="text-sm antialiased font-normal leading-normal text-blue-gray-900 flex items-center ">
                          {key === "name" ? (
                            <img src={imgURL} alt="" className="mr-2 h-6" />
                          ) : (
                            ""
                          )}
                          {values}
                        </p>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
