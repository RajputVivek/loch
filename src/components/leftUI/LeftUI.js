import "./leftUI.css";
import TextBlock from "../textBlock/TextBlock";
import Testimonial from "../../components/testimonial/Testimonial";
import data from "../../assets/text_data/data.json"; //Importing all text data from external JSON file here
import Slider from "../slider/Slider";
import cohort from "../../assets/images/cohort.svg";
import logo from "../../assets/images/logo.svg";

const LeftUI = () => {
  const { textData, testimonials } = data;

  return (
    <div id="left__ui">
      {/* Iterating through Text Blocks and rendering them dynamically */}
      {textData.map((datas, index) => (
        <section key={index} className={index === 1 ? "second-section" : ""}>
          <TextBlock
            heading={datas.data[0]}
            text={datas.data[1]}
            icon={datas.data[2]}
            // Add the 'right-align' class for the second .text__block
            className={index === 1 ? "right-align" : ""}
          />

          {/* Returning two different classes (one for right-caraousel and another for left-image) */}
          {index % 2 === 0 ? (
            <Slider />
          ) : (
            <div className="left__ui_cohort-wrapper">
              <img src={cohort} alt={"cohort"} />
            </div>
          )}
        </section>
      ))}

      {/* Testimonials sections' heading */}
      <h5 className="left__ui_section-heading">Testimonials</h5>

      {/* Testimonials' section starts */}
      <section>
        <div className="left__ui_testimonial-wrapper">
          <img src={logo} alt="Loch's logo" />
          {/* Rendering Testimonial dynamically */}
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.data.name}
              designation={testimonial.data.company_details}
              testimonial={testimonial.data.testimonial_text}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeftUI;
