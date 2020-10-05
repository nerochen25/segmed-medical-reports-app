import React from "react";
import Report from "./Report";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Topbar from './Topbar';

class ReportList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: this.props.reports,
    };
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
        <Topbar handleSearch={this.handleSearch} />
        <div className="table text-nowrap">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Content</th>
                <th scope="col">Details</th>
                <th scope="col">Tags</th>

              </tr>
            </thead>
            <tbody>
              {reports
                ? reports.map((report, i) => {
                  return <Report report={report} key={i} history={this.props.history} />;
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
  return {
    reports: state.reports,
  };
};

export default connect(mapStateToProps)(ReportList);
