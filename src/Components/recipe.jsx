import React from "react";

const Recipe = ({
  title,
  calories,
  image,
  ingredients = [],
  totalTime,
  id,
}) => {
  return (
    <div className="col-mb-4 w-25 h-50">
      <div className="card text-center text-white border-dark mb-4 shadow-mm m-2">
        <h4 className="card-header mh-25 bg-info">{title}</h4>
        <img className="card-img-top " src={image} alt={title} />
        <button
          type="button"
          className="btn btn-info"
          data-toggle="modal"
          data-target={`#${id}`}
        >
          Show more!
        </button>
      </div>
      <div className="modal" id={id}>
        <div className="modal-dialog">
          <div className="modal-content border-info">
            <div className="modal-header bg-info text-white ">
              <h3 className=" modal-title ">{title} </h3>
              <button className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body bg-white text-info ">
              <img className="card-img-top " src={image} alt={title} />
              <p className="list-group-item text-white bg-info">
                Calories: {Math.round(calories)} cal{" "}
              </p>
              <p className="list-group-item text-white bg-info">
                Total cook-time: {totalTime} minutes{" "}
              </p>
              <ul className="list-group list-group-flush bg-info">
                <header>Ingredients:</header>
                {ingredients.map((ingr) => (
                  <li className="list-group-item text-white bg-info">
                    {ingr.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
