import { Link } from "react-router-dom";

const Step1Selection = () => {
  return (
    <main className="flex w-full items-center justify-center border border-solid border-red-500 pt-[26px] text-white">
      <section className="border-greenish rounded-[40px] border border-solid">
        <div>
          <div>
            <h1>Ticket Selection</h1>

            <p>Step 1/3</p>
          </div>
          <span></span>
        </div>
        <div></div>
        <span></span>
        <div></div>
        <div></div>
        <div>
          <Link to="/details">Next</Link>
          <button>Cancel</button>
        </div>
      </section>
    </main>
  );
};

export default Step1Selection;
