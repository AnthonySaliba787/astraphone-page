function Features({ changeMenu }) {
  return (
    <>
      <div className="custom-container">
        <button onClick={() => changeMenu(0)} className="custom-solid-button">
          Back
        </button>
      </div>
    </>
  );
}

export default Features;
