export const Card = ({ cardTitle, cardDescription, cardIndex }) => {
  return (
    <div className="card h-100 text-reset">
      <img
        src={"https://picsum.photos/id/" + (865 + cardIndex) + "/200/200"}
        className="card-img-top"
        alt="random outdoor photo of a natural landscape of cityscape"
      />
      <div className="card-body">
        <h5 className="card-title">{cardTitle + " " + (cardIndex + 1)}</h5>
        <p className="card-text">{cardDescription}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <a href="#" className="btn btn-primary">
          Find out more!
        </a>
      </div>
    </div>
  );
};
