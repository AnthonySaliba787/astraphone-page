import React, { useState } from "react";
import { Transition } from "react-transition-group";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AnimatedBackground from "./components/AnimatedBackground";
import Specifications from "./components/Specifications";
import Preordering from "./components/Preordering";

function App() {
  const [currentMenu, setCurrentMenu] = useState(0);

  const changeMenu = (value) => {
    setCurrentMenu(value);
  };

  const loadMenu = () => {
    switch (currentMenu) {
      case 0:
        return <Hero changeMenu={changeMenu} />;
      case 1:
        return <Features changeMenu={changeMenu} />;
      case 2:
        return <Specifications changeMenu={changeMenu} />;
      case 3:
        return <Preordering changeMenu={changeMenu} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-screen min-h-screen mx-auto flex flex-col justify-center items-center">
      <AnimatedBackground />
      <Transition
        in={true}
        timeout={500}
        appear
        key={currentMenu}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div
            className={`transition-opacity duration-500 ${
              state === "entering" || state === "entered"
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            {loadMenu()}
          </div>
        )}
      </Transition>
    </div>
  );
}

export default App;
