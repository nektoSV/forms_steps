import React from "react";
import PropTypes from "prop-types";
import Step from "./Step";

const USID = require("usid");
const usid = new USID();

export default function DataForm(props) {
  const { formData, stateForm, onAdd } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.date === "" || formData.distance === "") {
      return;
    }
    const regex = /^\d+\.?\d*$/;
    const regexDistance = regex.test(formData.distance);
    if (!regexDistance) {
      return;
    }

    const step = new Step(usid.rand(), formData.date, formData.distance);
    onAdd(step);

    stateForm({ date: "", distance: "" });
  };

  const handleInput = (e) => {
    e.preventDefault();

    const inputName = e.target.name,
      value = e.target.value;

    stateForm((prevForm) => {
      return { ...prevForm, [inputName]: value };
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="input-wrapper">
            <label className="description">Дата (ДД.ММ.ГГ)</label>
            <input
              className="input-date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInput}
            />
          </div>
          <div className="input-wrapper">
            <label className="description">Пройдено км</label>
            <input
              className="input-distance"
              type="text"
              name="distance"
              maxLength={5}
              value={formData.distance}
              onChange={handleInput}
            />
          </div>
          <div className="button-block">
            <button className="form__send-btn">Ok</button>
          </div>
        </div>
      </form>
    </>
  );
}

DataForm.propTypes = {
  formData: PropTypes.object.isRequired,
  stateForm: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
