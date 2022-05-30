/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

function ShowSchools(props)
{
  const { personalData, onDelete } = props;
  return (
    <ul>
      {personalData.schools.map((school) => (
        <li key={school.id} data-key={school.id}>
          {school.schoolName}
          {" "}
          {school.subject}
          {" "}
          {school.dateStart}
          {" "}
          -
          {" "}
          {school.dateEnd}
          <button
            type="button"
            onClick={(e) => onDelete(e, "schools")}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ShowSchools;
