import React from "react";
import PropTypes from "prop-types";

export default function ListItem(props) {
  if (!props) {
    return null;
  }

  const { step, onRemove: handleRemove, onEdit: handleEdit } = props;

  return (
    <React.Fragment>
      <li data-id={step.id}>
        <div className="list-item">
          <div className="item-content">
            <span>{step.date}</span>
            <span>{step.distance}</span>
          </div>
          <div className="list-item-btns-block">
            <button
              className="edit"
              onClick={() => handleEdit(step.id)}
            ></button>
            <button
              className="remove"
              onClick={() => handleRemove(step.id)}
            ></button>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}
ListItem.propTypes = {
  step: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
