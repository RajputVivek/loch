import "./testimonial.css";

const Testimonial = ({name, designation, testimonial}) => {
  return (
    <div className="testimonial">
      <div className="testimonial__user-details">
        {name}
        <span className="testimonial__user-designation">
          {` ${designation}`}
        </span>
      </div>
      <div className="testimonial__text">
      {testimonial}
      </div>
    </div>
  );
};

export default Testimonial;
