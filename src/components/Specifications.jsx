function Specifications({ changeMenu }) {
  return (
    <>
      <div className="custom-container">
        <div className="accordion-group accordion-group-hover accordion-group-bordered">
          <div className="accordion">
            <input type="checkbox" id="toggle-9" className="accordion-toggle" />
            <label htmlFor="toggle-9" className="accordion-title">
              <span>Toggle Accordion 1</span>
              <span className="text-sm text-content3 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                necessitatibus
              </span>
            </label>
            <div className="accordion-content text-content2">
              <div className="min-h-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                necessitatibus iusto laborum autem placeat aspernatur inventore
                eius deleniti reprehenderit? Numquam commodi totam mollitia quod
              </div>
            </div>
          </div>
          <div className="accordion">
            <input
              type="checkbox"
              id="toggle-10"
              className="accordion-toggle"
            />
            <label htmlFor="toggle-10" className="accordion-title">
              <span>Toggle Accordion 2</span>
              <span className="text-sm text-content3 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                necessitatibus
              </span>
            </label>
            <div className="accordion-content">
              <div className="min-h-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                necessitatibus iusto laborum autem placeat aspernatur inventore
                eius deleniti reprehenderit? Numquam commodi totam mollitia quod
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row py-2 px-2 gap-4 justify-center items-center">
          <button onClick={() => changeMenu(1)} className="custom-solid-button">
            Back
          </button>
          <button onClick={() => changeMenu(2)} className="custom-solid-button">
            pre-ordering
          </button>
        </div>
      </div>
    </>
  );
}

export default Specifications;
