import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import MatchList from "./MatchList";

const navList = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

type Props = {
  navItems: {
    id: number;
    displayText: string;
    subItems: { id: number; displayText: string; path: string }[];
    path: string;
  }[];
  itemSelected: number;
};

const NavItems: React.FC<Props> = ({ navItems, itemSelected }) => {
  const selectedItem = navItems.find((item) => item.id === itemSelected);

  return (
    <motion.ul
      className="navList"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={navList}
    >
      {selectedItem?.subItems?.map((subItem) => (
        <div key={subItem.displayText} className="p-4">
          <motion.li variants={navItem} className="pb-4 tracking-wide text-white font-semibold ">
            <Link to={subItem.path} >{subItem.displayText}</Link>
          </motion.li>

          {selectedItem.id === 2 && (
            <motion.li variants={navItem} className="flex w-full">
              <MatchList />
            </motion.li>
          )}
        </div>
      ))}
    </motion.ul>
  );
};

export default NavItems;
