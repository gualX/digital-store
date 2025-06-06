import React, { useState } from "react";
import PropTypes from "prop-types";

function ProductOptions({ options, radius, shape, type, onChange }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
    if (onChange) {
      onChange(options[index]);
    }
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {options.map((option, index) => {
        const isSelected = index === selectedIndex;

        const baseClasses =
          shape === "square"
            ? `w-12 h-[46px] flex items-center justify-center border cursor-pointer`
            : "w-[31px] h-[31px] rounded-full border cursor-pointer";

        const selectedStyle =
          type === "text"
            ? isSelected
              ? "bg-[#C92071] text-white border-[#C92071] border-2"
              : "text-[#474747] border-gray-300 bg-white border"
            : isSelected
            ? "border-[#C92071] border-4"
            : "border-gray-300 border";

        const style = {};

        if (type === "color") {
          style.backgroundColor = option;
          style.borderRadius = shape === "circle" ? "50%" : radius;
        }

        if (shape === "square") {
          style.borderRadius = radius;
        }

        return (
          <div
            key={option + index}
            className={`${baseClasses} ${selectedStyle}`}
            style={style}
            onClick={() => handleClick(index)}
            title={type === "color" ? option : undefined}
          >
            {type === "text" ? (
              <span className="text-[16px] select-none font-semibold">{option}</span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(["square", "circle"]).isRequired,
  type: PropTypes.oneOf(["text", "color"]).isRequired,
  onChange: PropTypes.func,
};

ProductOptions.defaultProps = {
  radius: "8px",
  onChange: null,
};

export default ProductOptions;
