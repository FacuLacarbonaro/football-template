import { createFileRoute } from "@tanstack/react-router";
import { companyData } from "../../assets/companyData";
import { useState } from "react";
import Home from "../../components/shop/Home/Home";
import Kits from "../../components/shop/Kits/Kits";

export const Route = createFileRoute("/store/")({
  component: RouteComponent,
});

const NavItems = [
  "Best sellers",
  "Kits",
  "Trainingwear",
  "Accesories",
  "Gifts",
];

const coverImage =
  "https://a.storyblok.com/f/274736/2880x1125/a4f33681e0/pd-desktop.jpg/m/1680x0/filters:quality(85)";
function RouteComponent() {
  const [categorySelected, setCategorySelected] = useState("Home");

  return (
    <div>
      {/* Nav */}
      <div className="flex w-full justify-around py-4 border-b-2">
        <div
          className="flex items-center text-xl cursor-pointer"
          onClick={() => setCategorySelected("Home")}
        >
          United
          <img
            src={companyData.logo}
            alt={companyData.name}
            className="h-8 px-2"
          />
          Store
        </div>

        {NavItems.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => setCategorySelected(item)}
              className="cursor-pointer"
            >
              <h2
                className={`text-lg ${categorySelected === item ? "border-b-2 border-red-600 text-black" : "text-gray-400"}`}
              >
                {item}
              </h2>
            </div>
          );
        })}
      </div>
      {/* End Nav */}

      {/* Banner Image */}
      <div className="relative">
        <img src={coverImage} alt="" className="" />
        <h2 className="absolute bottom-0 p-20 text-9xl uppercase text-white font-bold ">
          {categorySelected}
        </h2>
      </div>

      {/* Body Component */}

      {/* TODO: REFACTOR */}
      {categorySelected === "Home" && <Home />}
      {categorySelected === "Kits" && <Kits />}
    </div>
  );
}
