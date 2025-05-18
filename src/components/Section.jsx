import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Section({ title, titleAlign = "left", link, children }) {
  return (
    <section className="mb-8">
      <div
        className={`flex justify-between items-center mb-4 ${
          titleAlign === "center" ? "flex-col gap-2 text-center" : ""
        }`}
      >
        <h2
          className={`text-[24px] text-[#474747] font-semibold w-full ${
            titleAlign === "left" ? "pl-26 mb-1" : ""
          }`}
          style={{ textAlign: titleAlign }}
        >
          {title}
        </h2>

        {link && titleAlign !== "center" && (
          <a href={link.href} className="text-primary text-[18px] hover:underline">
            {link.text}
          </a>
        )}
      </div>

      {/* Conteúdo passado como filhos */}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(["left", "center"]),
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
};

export default Section;
