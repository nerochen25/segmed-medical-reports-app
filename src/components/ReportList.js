import React from "react";
import Report from "./Report";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

class ReportList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: this.props.reports,
    };
  }

  componentDidMount() {
    //   this.setState({
    //       reports: this.props.reports
    //   })
  }

  searchReports = (query) => {
    query = query.toLowerCase();
    if (query === "") {
      this.setState({
        reports: this.props.reports,
      });
    } else {
      let searchedReports = this.props.reports.filter((report) => {
        return (
          report.title.toLowerCase().includes(query) ||
          report.content.toLowerCase().includes(query) ||
          report.text.toLowerCase().includes(query)
        );
      });
      this.setState({ reports: searchedReports });
    }
  };

  handleSearch = (e) => {
    this.searchReports(e.target.value);
  };

  render() {
    const { reports } = this.state;

    return (
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="navbar-btn">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <form className="form-inline ml-5">
              <i className="fas fa-search" aria-hidden="true"></i>
              <input
                className="form-control form-control-sm ml-3 w-75"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onKeyUp={this.handleSearch}
              />
            </form>
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

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="table text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Details</th>
                <th scope="col">Tags</th>
                <th scope="col">Add more tags</th>
              </tr>
            </thead>
            <tbody>
              {reports
                ? reports.map((report, i) => {
                  return <Report report={report} key={i} />;
                })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    reports: state.reports,
  };
};

export default connect(mapStateToProps)(ReportList);
