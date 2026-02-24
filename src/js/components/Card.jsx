export const Card = ([cardTitle, cardDescription]) => {
  return (
    <div className="card h-100">
      <img src="https://picsum.photos/id/866/200/200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">
          {cardDescription}
        </p>
        <a href="#" className="btn btn-primary">
          Find out more!
        </a>
      </div>
    </div>
  );
};
