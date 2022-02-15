import MyImageComponent from "../Image/MyImageComponent";

const TestimonalCard = ({ src, name }) => {
  return (
    <div className="testimonal-card">
      <MyImageComponent src={src} />
      <h4>— {name}</h4>
    </div>
  );
};

export default TestimonalCard;
