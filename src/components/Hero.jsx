function Hero({ changeMenu }) {
  return (
    <>
      <div className="custom-container">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center py-2">
          AstraPhone X
        </h1>
        <p className="text-lg md:text-xl text-center font-medium tracking-widest uppercase text-blue-500">
          reach the stars
        </p>
        <button onClick={() => changeMenu(1)} className="custom-solid-button">
          discover a new era of smartphones
        </button>
      </div>
    </>
  );
}

export default Hero;
