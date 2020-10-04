import React from "react";
import { Link, NavLink } from "react-router-dom";

function Report({ report }) {
    return (
        <tr>
            <th scope="row">{report.id}</th>
            <td>Report {report.id}</td>
            <td>
                <p className="overflow-ellipsis">{report.title}</p>
            </td>
            <td>
                <p className="overflow-ellipsis">{report.content}</p>
            </td>
            <td>
                <span>#goodreport</span>
            </td>
            <td>
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Add hashtag
          </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">
                            goodreport
            </a>
                        <a className="dropdown-item" href="#">
                            conditionreport
            </a>
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default Report;
