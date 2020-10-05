import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ReportDetails = (props) => {


    const { report, pages } = props;
    const splittedText = report.text.split('\n\n');
    let currentPage = report.id;
    const paragraphs = splittedText.map((text, i) => {
        return (
            <div key={i} className="content-container">
                <p>{text}</p>
            </div>
        )
    })

    const prevPage = () => {
        if (currentPage === 1) {
            alert('This is the first report')
        } else {
            currentPage--;
            props.history.push(`/reports/${currentPage}`)
        }
    }

    const nextPage = () => {
        if (currentPage === Math.max(...pages)) {
            alert('This is the last report')
        } else {
            currentPage++;
            props.history.push(`/reports/${currentPage}`)
        }  
    }

    return (
        <div id='content'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="navbar-btn">
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <button
              className="btn btn-dark d-inline-block d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-align-justify"></i>
            </button>
            <Link to='/' className="btn btn-secondary back-button">Back to Dashboard</Link>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active mr-2 ml-2">
                    <button className="nav-link text-white btn btn-secondary" onClick={prevPage}>Prev Report</button>
                </li>
                <li className="nav-item active mr-2 ml-2">
                    <button className="nav-link text-white btn btn-secondary" onClick={nextPage}>Next Report</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            
        <div id='content'>
            <h2 className="text-center">{`Report ${report.id}: `} {report.title}</h2>
            <h5 className="text-center mt-5 mb-5">Author: {report.author}</h5>
            {paragraphs}
        </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const reports = state.reports;
    const pages = state.reports.map(report => report.id)
    const report = reports.filter(report => report.id.toString() === id.toString())

    return {
        report: report[0],
        pages
    }

}

export default connect(mapStateToProps)(ReportDetails);


