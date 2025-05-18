// src/components/FilterGroup.jsx
import React from "react";

const FilterGroup = ({
  title,
  inputType,
  options,
  selectedValues = [],
  onChange,
  fontSize = "base", // pode ser "base", "lg", etc, para o tamanho da fonte
}) => {
  return (
    <div className="mb-6">
      <h3 className={`text-${fontSize} text-dark-gray-2 font-semibold mb-3`}>{title}</h3>
      <div className="flex flex-col gap-3">
        {options.map(({ text, value }, i) => {
          const val = value || text;
          const checked = selectedValues.includes(val);
          return (
            <label
              key={i}
              className={`flex items-center gap-2 cursor-pointer text-${fontSize} text-dark-gray-2`}
            >
              <input
                type={inputType}
                value={val}
                checked={checked}
                onChange={() => onChange(val)}
                className="w-5 h-5 accent-[#C92071]"
              />
              {text}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterGroup;
