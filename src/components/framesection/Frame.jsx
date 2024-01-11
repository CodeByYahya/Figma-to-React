import "./frame.css";

function Frame({ img, heading, paragraph }) {
  return (
    <div className="frame">
      <div>
        <img className="frame-img" src={img} alt="" />
      </div>
      <div className="frame-heading">
        <h3>{heading[0]} </h3>
        <p>{paragraph[0]}</p>
        <button>Learn more</button>
      </div>
    </div>
  );
}

export default Frame;
