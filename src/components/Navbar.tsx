import { useState, createElement } from "react";
import { content } from "@/content";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div
        className={`sm:cursor-pointer fixed top-2 left-1/2 -translate-x-1/2 z-[999] rounded-lg text-[#a4c4ff] p-2`}
      >
        <div
          className={`${showMenu ? `hidden` : `block z-10`}`}
          onClick={() => setShowMenu(true)}
        >
          <FaArrowAltCircleDown size={20} />
        </div>
        <div
          className={`${showMenu ? `block z-10` : `hidden`}`}
          onClick={() => setShowMenu(false)}
        >
          <FaArrowAltCircleUp size={20} />
        </div>
      </div>
      <nav
        className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "top-10" : "top-[-100%]"
        }`}
      >
        {nav.map((item, i) => (
          <a
            href={item.link}
            key={`${item.link}-${i}`}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-dark_primary text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
