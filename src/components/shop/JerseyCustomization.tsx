import { Heart, Share } from "lucide-react";
import { useState } from "react";

const jerseyVariantList = [
  {
    id: 1,
    variant: "home",
    name: "Manchester United 24/25 Home Jersey",
    imgURL:
      "https://store.manutd.com/jersey/shirt-variants/home/home-front-medium.jpg?v=1001",
  },
  {
    id: 2,
    variant: "away",
    name: "Manchester United 24/25 Away Jersey",
    imgURL:
      "https://store.manutd.com/jersey/shirt-variants/away/away-front-medium.jpg?v=1001",
  },
  {
    id: 3,
    variant: "third",
    name: "Manchester United 24/25 Third Jersey",
    imgURL:
      "https://store.manutd.com/jersey/shirt-variants/third/third-front-medium.jpg?v=1001",
  },
  {
    id: 4,
    variant: "gk",
    name: "Manchester United 24/25 GK Jersey",
    imgURL:
      "https://store.manutd.com/jersey/shirt-variants/gk/gk-front-medium.jpg?v=1001",
  },
];

const sizesAvaiables = [
  {
    displayName: "S",
    id: 1,
  },
  {
    displayName: "M",
    id: 2,
  },
  {
    displayName: "L",
    id: 3,
  },
  {
    displayName: "XL",
    id: 4,
  },
  {
    displayName: "XXL",
    id: 5,
  },
];

const JerseyCustomization = () => {
  const [jerseySelected, setJerseySelected] = useState(jerseyVariantList[0]);
  const [sizeSelected, setSizeSelected] = useState(sizesAvaiables[0]);

  const handleChangeJerseySelected = (e: number) => {
    const newJerseyselected = jerseyVariantList.find((obj) => {
      const newjersey = obj.id === e;
      return newjersey;
    });

    if (newJerseyselected) {
      setJerseySelected(newJerseyselected);
    } else {
      console.log("Jersey not found.");
      // Optionally handle the case when no jersey is found (e.g., set a default value or handle the error)
    }
    console.log(newJerseyselected, "newJerseyselected");
  };

  return (
    <div className="bg-gray-300 mx-20 mt-16">
      <div className="p-10 flex ">
        <img
          src={jerseySelected.imgURL}
          alt={jerseySelected.name}
          className="w-2/4 "
        />

        <div className="flex-col mx-auto pt-10 w-2/4 px-10 relative h-auto">
          <div>
            <Heart className="right-1 absolute top-[-10px] mr-10 hover:fill-red-600 hover:text-red-600 hover:cursor-pointer" />
            <Share className="right-1 absolute top-[-10px]  hover:text-green-600 hover:cursor-pointer" />
          </div>

          <h3 className="text-3xl pb-4">{jerseySelected.name}</h3>
          <p className="py-2 uppercase">
            Shirt Variant: {jerseySelected.variant}
          </p>

          <div className="flex gap-4 py-2">
            {jerseyVariantList.map((jersey) => {
              return (
                <img
                  src={jersey.imgURL}
                  alt={jersey.variant}
                  key={jersey.id}
                  onClick={() => {
                    setJerseySelected(jersey);
                  }}
                  className={`h-[64px] rounded-full cursor-pointer ${jerseySelected.id === jersey.id && "outline outline-red-600 outline-solid"} `}
                />
              );
            })}
          </div>

          <div>
            <form name="jerseySelected" className="mx-auto my-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Shirt Model
              </label>
              <select
                value={jerseySelected.id}
                onChange={(e) => {
                  handleChangeJerseySelected(Number(e.target.value));
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-red-600 block w-full p-2.5 "
              >
                {/* <option selected>Choose a country</option> */}
                {jerseyVariantList.map((opt) => {
                  return (
                    <option key={opt.id} value={opt.id}>
                      {opt.name}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>

          <p>Size</p>
          <div className="flex gap-6 py-4">
            {sizesAvaiables.map((size, i) => {
              return (
                <div
                  key={i}
                  className={`p-2 rounded outline outline-black outline-solid w-10 flex justify-center cursor-pointer hover:bg-gray-400 hover:text-white hover:outline-white ${sizeSelected.id === size.id && "outline-red-600 bg-red-600 text-white outline-2"} `}
                  onClick={() => setSizeSelected(size)}
                >
                  <p>{size.displayName}</p>
                </div>
              );
            })}
          </div>

          <p>From</p>
          {/* PRICE example */}
          <h2 className="py-4 text-4xl">$ 499</h2>
          <button className="h-14 bg-primary p-4 w-full rounded mt-4 bottom-1">
            <p className="text-white">Add to basket</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JerseyCustomization;
