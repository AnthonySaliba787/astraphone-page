import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AnimatedBackground from "./components/AnimatedBackground";

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
      default:
        return null;
    }
  };

  return (
    <div className="w-screen min-h-screen mx-auto flex flex-col justify-center items-center">
      <AnimatedBackground />
      <TransitionGroup>
        <CSSTransition
          key={currentMenu}
          timeout={500}
          classNames={{
            enter: "opacity-0",
            enterActive: "animate-fadeIn",
            exit: "opacity-1 hidden",
            exitActive: "animate-fadeOut",
          }}
        >
          {loadMenu()}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
