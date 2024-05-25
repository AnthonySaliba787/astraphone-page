function Signup({ changeMenu }) {
  return (
    <>
      <div className="custom-container">
        <div className="card">
          <div className="card-body justify-center items-center text-center">
            <h2 className="card-header">Pre-ordering Menu</h2>
            <p className="font-lg text-content2 py-2">
              This is where you can pre-order your very own{" "}
              <span className="font-medium text-blue-500">AstraPhone X,</span>{" "}
              releasing in the near future. Pre-ordering will grant you free
              accessories, extended warranty and a discount on the final price
              of the smartphone!
            </p>
            <div className="card-footer">
              <label className="btn btn-primary uppercase" htmlFor="modal-1">
                pre-order now
              </label>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row py-2 px-2 gap-4 justify-center items-center">
          <button onClick={() => changeMenu(2)} className="custom-solid-button">
            Back
          </button>
        </div>

        <input className="modal-state" id="modal-1" type="checkbox" />
        <div className="modal backdrop-blur-2xl">
          <label className="modal-overlay" htmlFor="modal-1"></label>
          <div className="modal-content flex flex-col gap-5">
            <label
              htmlFor="modal-1"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
            <h2 className="text-xl">Payment Options</h2>
            <span>
              You may use credit cards or Paypal for facilitating your
              pre-ordering experience.
            </span>
            <div className="flex gap-3">
              <button className="btn btn-primary btn-block">
                Credit Cards
              </button>

              <button className="btn btn-secondary btn-block">Paypal</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
