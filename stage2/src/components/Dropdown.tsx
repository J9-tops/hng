import { useState } from "react";
import arrow from "../assets/images/icon.png";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function Select({
  options,
  onChange,
  placeholder = "Select...",
}: SelectProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="border-blackygreen flex cursor-pointer items-center justify-between rounded-xl border border-solid bg-transparent p-2"
        onClick={() => setOpen(!open)}
      >
        {selected
          ? options.find((opt) => opt.value === selected)?.label
          : placeholder}
        <img src={arrow} alt="" width={20} height={10} className="h-3" />
      </div>
      {open && (
        <ul className="border-blackygreen mt-1 max-h-48 w-full overflow-auto rounded-t-xl border border-solid bg-transparent shadow-md">
          {options.map((option) => (
            <li
              key={option.value}
              className="cursor-pointer p-2 hover:bg-gray-200"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
