import AI from "../assets/ai.webp";
import circuit from "../assets/circuit.webp";
import battery from "../assets/battery.webp";

function Features({ changeMenu }) {
  return (
    <>
      <div className="custom-container">
        <h1 className="text-3xl font-medium py-2 px-2">Features</h1>
        <div className="w-full flex flex-col md:flex-row px-4 py-4 gap-4 flex-wrap justify-center items-center">
          <div className="card card-image-cover hover:scale-[1.02] duration-300">
            <img src={circuit} alt="" className="aspect-video" />
            <div className="card-body">
              <h2 className="card-header">Extreme Performance</h2>
              <p className="text-content2">
                Powered by the Astra P9 processor, it will run anything you
                throw at it, even the heaviest games!
              </p>
            </div>
          </div>
          <div className="card card-image-cover hover:scale-[1.02] duration-300">
            <img src={battery} alt="" className="aspect-video" />
            <div className="card-body">
              <h2 className="card-header">All-Day Battery Life</h2>
              <p className="text-content2">
                The ultra-efficient processor coupled with the massive battery
                packed inside will guarantee a full day of battery life!
              </p>
            </div>
          </div>
          <div className="card card-image-cover hover:scale-[1.02] duration-300">
            <img src={AI} alt="" className="aspect-video" />
            <div className="card-body">
              <h2 className="card-header">AI Powered</h2>
              <p className="text-content2">
                This phone packs a dedicated NPU (Neural Processing Unit)
                capable of plowing through any AI task thrown at it!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row py-2 px-2 gap-4 justify-center items-center">
          <button onClick={() => changeMenu(0)} className="custom-solid-button">
            Back
          </button>
          <button onClick={() => changeMenu(2)} className="custom-solid-button">
            specifications
          </button>
        </div>
      </div>
    </>
  );
}

export default Features;
