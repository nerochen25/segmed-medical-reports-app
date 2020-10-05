import React from "react";
import { Link, NavLink } from "react-router-dom";

class Report extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnClick = () => {
        const reportId = this.props.report.id
        this.props.history.push(`/reports/${reportId}`)
    }

    handleOnDrag = (e, report) => {
        console.log(report)
    }

    handleOnDragOver = (e) => {
        console.log(e)
    }

    render() {
        const { report } = this.props;
        return (
            <tr className="report-row" draggable="true" onClick={this.handleOnClick} onDrag={(e) => this.handleOnDrag(e, report)} onDragOver={(e) => this.handleOnDragOver(e)}>
                <th scope="row">{report.id}</th>
                <td>Report {report.id}</td>
                <td>
                    <p className="overflow-ellipsis">{report.title}</p>
                </td>
                <td>
                    <p className="overflow-ellipsis">{report.content}</p>
                </td>
                <td>
                    {(report.id % 2) ? <span id="goodreport-tag">#goodreport</span> : <span id="conditionreport-tag">#conditionreport</span>}
                </td>
                
            </tr>

        )
    }


}


export default Report;
