import React, { useState } from "react";
import DataForm from "./DataForm";

import List from "./List";

export default function Training() {
  const [form, setForm] = useState({ date: "", distance: "" });
  const [steps, setSteps] = useState([]);
  const [edit, setEdit] = useState({ status: false, data: "" });

  const handleAdd = (step) => {
    let copySteps = [...steps];

    if (edit)
      setSteps((prevState) =>
        prevState.filter((o) => {
          return o.id !== edit.data.id;
        })
      );

    let idx = steps.findIndex((i) => i.date === step.date);

    if (idx === -1) {
      setSteps((prevSteps) => [...prevSteps, step]);
    } else if (idx !== -1 && edit.status) {
      copySteps[idx].date = form.date;
      copySteps[idx].distance = form.distance;

      setSteps(copySteps);
    } else {
      copySteps[idx].addDistance(step.distance);
      setSteps(copySteps);
    }
    setEdit({ status: false, data: "" });
  };

  const handleEdit = (id) => {
    let idx = [...steps].findIndex((i) => i.id === id);

    setEdit({ status: true, data: steps[idx] });
    setForm({ date: steps[idx].date, distance: steps[idx].distance });
  };

  const handleRemove = (id) => {
    setEdit({ status: false, data: "" });
    setSteps((prevState) => prevState.filter((o) => o.id !== id));
  };

  return (
    <div className="training-container">
      <DataForm formData={form} stateForm={setForm} onAdd={handleAdd} />
      <List
        data={steps}
        onRemove={handleRemove}
        onEdit={handleEdit}
        editData={edit}
      />
    </div>
  );
}
