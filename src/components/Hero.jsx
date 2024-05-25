import AnimatedBackground from "./AnimatedBackground";

function Hero() {
  return (
    <>
      <div className="container flex flex-col justify-center items-center py-4 px-4">
        <AnimatedBackground />
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center py-2">
          AstraPhone X
        </h1>
        <p className="text-lg md:text-xl text-center font-medium tracking-widest uppercase text-blue-500">
          reach the stars
        </p>
        <button className="btn btn-solid-primary uppercase my-4 font-medium">
          discover new technology
        </button>
      </div>
    </>
  );
}

export default Hero;
