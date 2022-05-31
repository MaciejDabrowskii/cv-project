/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Component } from "react";

function ShowSchools(props)
{
  const { personalData, onDelete } = props;
  return (
    <ul>
      {personalData.schools
        .sort((a, b) => b.dateStart - a.dateStart)
        .map((school) => (
          <li key={school.id} data-key={school.id}>
            <div
              className="school"
            >
              <p
                className="school-name"
              >
                {school.schoolName}
              </p>
              <p
                className="school-date"
              >
                {school.dateStart}
                {" "}
                -
                {" "}
                {school.dateEnd}
              </p>
              <p
                className="school-subject"
              >
                {school.subject}
              </p>

              {" "}

            </div>
            <button
              type="button"
              name="schools"
              onClick={onDelete}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
export default ShowSchools;