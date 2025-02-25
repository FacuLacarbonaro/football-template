import { createFileRoute } from "@tanstack/react-router";
import NewsCard from "../components/news/NewsCard";
import BrandFooterRow from "../components/common/BrandFooterRow";
import Footer from "../components/common/Footer";

export const Route = createFileRoute("/news")({
  component: RouteComponent,
});

const newsList = [
  {
    id: 1,
    title: "Manchester United - Arsenal",
    imgURL: "https://i.ytimg.com/vi/BWxou1mSFF0/maxresdefault.jpg",
    type: "Video",
    description:
      "Dentro de Old Trafford: Nuevas Imagenes y detras de escena del Manchester United - Arsenal",
    date: "",
  },
  {
    id: 2,
    title: "Future about Marcus Rashford ",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyac6RXX7p_N-1QfV3MJuHrnqhAYS_mZYVMg&s",
    type: "Post",
    description:
      "Marcus Rashford quiere ser transferido el proximo mercado de pases.",
    date: "",
  },
  {
    id: 3,
    title: "Future about Marcus Rashford ",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyac6RXX7p_N-1QfV3MJuHrnqhAYS_mZYVMg&s",
    type: "Post",
    description:
      "Marcus Rashford quiere ser transferido el proximo mercado de pases.",
    date: "",
  },
  {
    id: 4,
    title: "Future about Marcus Rashford ",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyac6RXX7p_N-1QfV3MJuHrnqhAYS_mZYVMg&s",
    type: "Post",
    description:
      "Marcus Rashford quiere ser transferido el proximo mercado de pases.",
    date: "",
  },
  {
    id: 5,
    title: "Future about Marcus Rashford ",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyac6RXX7p_N-1QfV3MJuHrnqhAYS_mZYVMg&s",
    type: "Post",
    description:
      "Marcus Rashford quiere ser transferido el proximo mercado de pases.",
    date: "",
  },
  {
    id: 6,
    title: "Future about Marcus Rashford ",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyac6RXX7p_N-1QfV3MJuHrnqhAYS_mZYVMg&s",
    type: "Post",
    description:
      "Marcus Rashford quiere ser transferido el proximo mercado de pases.",
    date: "",
  },
];

function RouteComponent() {
  return (
    <div className="bg-primary ">
      <h1 className=" text-center pt-2 text-gray-200 text-4xl font-semibold">News</h1>

      <div className="grid  grid-cols-3 col-span-1 w-full p-6 gap-6 ">
        {newsList.map((cardData) => {
          return <NewsCard cardData={cardData} />;
        })}
      </div>

      <BrandFooterRow/>
      <Footer/>
    </div>
  );
}
