import React from "react";
import Report from "./Report";
import { Link, NavLink } from 'react-router-dom';

const fileNames = [];
for (let id = 1; id < 11; id++) {
    let txtFileItem = require(`../reports/report${id}.txt`)
    fileNames.push([id,txtFileItem]);
}


class ReportList extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: []
  }

  componentDidMount() {
      const data = []
      for (let txtFile of fileNames) {
        data.push(this.readTextFile(txtFile));
      }
      this.setState({
          data
      })
  }

  readTextFile = (file) => {
    const data = {id: file[0], title: '', author: '', releasedDate: '', content: '', text: '', tag: ''}
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file[1], false);
    rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                data.content = allText.split('\n')[0];
                data.text = allText;
                for (let text of allText.split('\n')) {
                    if (text.includes('Title:')) {
                        data.title = text.split('Title: ')[1]
                    }
                    if (text.includes('Author:')) {
                        data.author = text.split('Author: ')[1]
                    }
                    if (text.includes('Release Date:')) {
                        data.releasedDate = text.split('Release Date: ')[1]
                        break;
                    }
                }
            }
        }
    };
    rawFile.send(null);
    return data;
};

searchReports = (query) => {
    query = query.toLowerCase();
    if (query === '') {
        this.setState({
            data: [],
          });
    } else {
      let searchedReports = this.state.data.filter((report) => {
        return report.title.toLowerCase().includes(query) || report.content.toLowerCase().includes(query) || report.text.toLowerCase().includes(query);
      });
      this.setState({ data: searchedReports });
    }
}

handleSearch = (e) => {
    this.searchReports(e.target.value);
}

  render() {
    const { data } = this.state;
    const options = ['#goodreport', '#conditionreport'];
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
              {data ? data.map((report, i) => {
                  return (
                    <Report report={report} key={i} />
                  )
              }) : null}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ReportList;
