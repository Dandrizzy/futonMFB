import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = ["home", "menus", "cart", "blog", "faq", "team"];

const Tab = ({ setOpen }) => {

  const route = useLocation();
  const name = route.pathname.split('/');
  const index = tabs.indexOf(name[1]);


  const [selected, setSelected] = useState(tabs[index]);

  return (
    <div className="grid place-items-end sm:flex sm:items-center sm:flex-wrap gap-2" >
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
          setOpen={setOpen}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
  setOpen
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        setOpen(open => !open);
        setSelected(text);
        navigate(`${text.toLowerCase()}`);
      }}
      className={`${selected
        ? "text-white"
        : "text-neutral-800 hover:text-blue-700 hover:bg-blue-100"
        } text-sm transition-colors px-2.5 py-0.5 rounded-md relative ring-0`}
    >
      <span className="relative z-10">{text.toUpperCase()}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md outline-none"
        ></motion.span>
      )}
    </button>
  );
};

export default Tab;