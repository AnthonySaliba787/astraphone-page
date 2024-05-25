function Preordering({ changeMenu }) {
  return (
    <>
      <div className="custom-container">
        <div className="w-full flex flex-row py-2 px-2 gap-4 justify-center items-center">
          <button onClick={() => changeMenu(2)} className="custom-solid-button">
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Preordering;
