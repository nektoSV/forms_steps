import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

import moment from "moment";
import "moment/locale/ru";

const USID = require("usid");
const usid = new USID();

export default function List(props) {
  const { data, onRemove: handleRemove, onEdit: handleEdit } = props;

  if (!data.length) {
    return null;
  }

  const sortedDate = data.sort((a, b) => moment(b.date) - moment(a.date));

  return (
    <React.Fragment>
      <ul>
        {sortedDate.map((o) => {
          return (
            <ListItem
              key={usid.rand()}
              step={o}
              onRemove={handleRemove}
              onEdit={handleEdit}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};