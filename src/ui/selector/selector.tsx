import { useState } from "react";
import arrow from '../../assets/arrow.svg'

const Selector = ({
  options,
  onSelect,
  startOption,
}: {
  options: string[];
  startOption: string;
  onSelect: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(startOption);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect();
    setIsOpen(false);
  };

  return (
    <div className="relative w-10">
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }} className=" flex justify-between">
        <span>{selectedOption}</span>
        <img src={arrow} alt="" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
      </div>
      <ul
        className="w-full bg-main-white absolute left-0 mt-1 shadow-lg transition-all duration-300 ease-in-out transform scale-100 opacity-100"
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(-10px)",
          opacity: isOpen ? 1 : 0,
        }}
      >
        {options
          .filter((it) => it !== selectedOption)
          .map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="text-black-main w-full cursor-pointer"
            >
              {option}
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Selector };
