import { Link } from "@tanstack/react-router";
import { companyData } from "../../assets/companyData.js";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { useState } from "react";
import { navOptions } from "./navOptions.js";
import NavItems from "./NavItems.js";

const navContainer = {
  visible: {
    //x: 0,
    opacity: 1,
    transition: {
      x: { velocity: 100 },
      duration: 0.3,
    },
  },
  hidden: {
    //x: -250,
    opacity: 0,
    transition: {
      x: { velocity: 100 },
      duration: 0.3,
    },
  },
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState(0);

  const handleHoverNavItem = (id: number) => {
    setItemSelected(id);
    setIsOpen(true);
  };

  return (
    <div onMouseLeave={() => setIsOpen(false)}>
      <div className="flex w-full  bg-primary py-4 pl-12">
        <Link to="/">
          <img
            src={companyData.logo}
            alt={companyData.name}
            className="w-[60px]"
          />
        </Link>

        <div className="flex flex-start justify-around items-center ">
          {navOptions.map(({ displayText, path, id }) => {
            return (
              <Link
                to={path}
                className="font-bold text-md tracking-wider text-white hover:text-gray-200 w-full px-10"
                onMouseEnter={() => handleHoverNavItem(id)}
                key={id}
              >
                {displayText}
              </Link>
            );
          })}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar"
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <div className=" absolute w-full justify-start  bg-primary flex ">
              <NavItems navItems={navOptions} itemSelected={itemSelected} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
