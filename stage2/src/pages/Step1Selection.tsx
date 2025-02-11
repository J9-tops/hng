import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "../components/Dropdown";

const Step1Selection = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  console.log(selectedValue);
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ];
  return (
    <main className="flex h-full w-full items-center justify-center px-5 pt-[26px] text-white">
      <section className="border-greenish bg-LightGreen flex flex-col gap-8 rounded-[40px] border border-solid p-6">
        <div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <h1 className="font-jeju text-2xl">Ticket Selection</h1>
            <p>Step 1/3</p>
          </div>
          <span></span>
        </div>
        <div className="lg:border-bgGreen flex flex-col gap-8 lg:rounded-4xl lg:border lg:border-solid lg:p-6">
          <div className="border-blackygreen relative flex flex-col gap-10 self-stretch rounded-3xl border-2 border-t-0 border-solid px-6 py-4 backdrop-blur-[7px] before:absolute before:inset-0 before:rounded-[24px] before:bg-[radial-gradient(57.42%_106.59%_at_14.02%_32.06%,rgba(36,160,181,0.2)_0%,rgba(36,160,181,0)_100%)] before:content-['']">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-rage text-whitish text-center text-[39px] leading-10">
                Techember Fest ”25
              </h1>
              <p className="text-center">
                Join us for an unforgettable experience at [Event Name]! Secure
                your spot now.
              </p>
            </div>
            <p className="flex flex-col gap-1 text-center">
              <span>📍 [Event Location]</span>
              <span>March 15, 2025 | 7:00 PM</span>
            </p>
          </div>
          <span className="bg-blackygreen h-1 w-full"></span>
          <div>
            <p className="mb-2">Select Ticket Type:</p>
            <form
              id="accessType"
              className="bg-blackergreen border-blackygreen flex flex-col gap-6 self-stretch rounded-3xl border border-solid p-4"
            >
              <label
                htmlFor="regularAccess"
                className="bg-greenish flex cursor-pointer justify-between rounded-[12px] p-2"
              >
                <input
                  type="checkbox"
                  name="regularAccess"
                  id="regularAccess"
                  hidden
                />
                <p className="text-whitish flex flex-col text-sm">
                  <span className="mb-3">Free</span>
                  <span>REGULAR ACCESS</span>
                  <span>20 left</span>
                </p>
              </label>
              <label
                htmlFor="vipAccess"
                className="border-blackygreen flex cursor-pointer justify-between rounded-[12px] border border-solid bg-transparent p-2 text-sm"
              >
                <input type="checkbox" name="vipAccess" id="vipAccess" hidden />
                <p className="text-whitish flex flex-col text-sm">
                  <span className="mb-3">$50</span>
                  <span>VIP ACCESS</span>
                  <span>20 left</span>
                </p>
              </label>
              <label
                htmlFor="vvipAccess"
                className="border-blackygreen flex cursor-pointer justify-between rounded-[12px] border border-solid bg-transparent p-2 text-sm"
              >
                <input
                  type="checkbox"
                  name="vvipAccess"
                  id="vvipAccess"
                  hidden
                />
                <p className="text-whitish flex flex-col text-sm">
                  <span className="mb-3">$150</span>
                  <span>VVIP ACCESS</span>
                  <span>20 left</span>
                </p>
              </label>
            </form>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Number of Tickets</h2>
            <Select
              options={options}
              onChange={setSelectedValue}
              placeholder="Choose a fruit"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Link
              to="/details"
              className="bg-subGreen font-jeju w-full rounded-lg px-6 py-3 text-center"
            >
              Next
            </Link>
            <button className="border-subGreen font-jeju w-full rounded-lg border border-solid bg-transparent px-6 py-3 text-center">
              Cancel
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Step1Selection;
