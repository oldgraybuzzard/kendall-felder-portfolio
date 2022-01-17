import React from "react";

function Card({onClose, currentProject}) {
  const {name, category, description, index} = currentProject;
      return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <p>
            {description}
          </p>
          <button onClick={onClose} type="button">
            Close this modal
          </button>
        </div>
      </div>
    );
  }

export default Card;