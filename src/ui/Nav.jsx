import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = ["home", "Investment", "About", "FAQs", "Contact"];

const Nav = () => {

  const route = useLocation();
  const name = route.pathname.split('/');
  const index = tabs.indexOf(name[1]);


  const [selected, setSelected] = useState(tabs[index]);

  return (
    <div className="grid place-items-end sm:flex sm:items-center sm:flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        setSelected(text);
        navigate(`${text.toLowerCase()}`);
      }}
      className={`${selected
        ? "text-white"
        : "text-neutral-800 hover:text-blue-100 hover:bg-blue-700"
        } text-sm transition-colors px-2.5 py-2 rounded-md relative ring-0`}
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

export default Nav;