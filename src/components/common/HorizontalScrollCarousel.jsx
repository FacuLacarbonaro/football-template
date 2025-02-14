import { Link } from "@tanstack/react-router";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const HorizontalScrollCarousel = ({ title }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-59%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 flex h-[650px] items-center overflow-hidden ">
        <div className="w-[100vw] flex absolute top-[5%]">
          <h2 className="text-center mx-auto text-3xl uppercase">{title}</h2>
        </div>
        <motion.div
          style={{ x }}
          className="flex gap-4 justify-center items-center"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 cursor-pointer"
    >
      <Link to={card.path}>
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 flex justify-center w-full mb-6 px-8">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-4 text-lg font-black text-center uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </Link>
    </div>
  );
};

const cards = [
  {
    url: "https://mufc-live.cdn.scayle.cloud/images/fe34a657e62177085357d7bb9582da5b.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
    title: "1998/00 Retro Home Jersey",
    id: 1,
    path: "/",
  },
  {
    url: "https://mufc-live.cdn.scayle.cloud/images/30c7c4eda4d5d55553c97d485791f7e9.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
    title: "1999 Retro Champions League Final Jersey",
    id: 2,
    path: "/",
  },
  {
    url: "https://retrosleague.com/cdn/shop/products/a41_1426x.jpg?v=1646948027",
    title: "1994/96 Away Jersey",
    id: 3,
    path: "/",
  },
  {
    url: "https://retrosleague.com/cdn/shop/products/1_860c237c-85d5-4733-a32d-7be7f1feb6cb_1426x.jpg?v=1645806294",
    title: "1996 Home Jersey - Long Sleeve",
    id: 4,
    path: "/",
  },
  {
    url: "https://retrosleague.com/cdn/shop/files/a1_533x.jpg?v=1682445247",
    title: "2008/09 Away Jersey",
    id: 5,
    path: "/",
  },
  {
    url: "https://retrosleague.com/cdn/shop/files/19.png?v=1708719667",
    title: "2002/04 Away Jersey",
    id: 6,
    path: "/",
  },
  {
    url: "https://retrosleague.com/cdn/shop/products/1_81828689-eaa3-498b-a066-9f7c5e984de0_1426x.jpg?v=1645806480",
    title: "2009/10 Home Jersey",
    id: 7,
    path: "/",
  },
];
