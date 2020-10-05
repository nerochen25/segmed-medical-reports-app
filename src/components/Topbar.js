import React from 'react';

const Topbar = (props) => {
    const { handleSearch } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="navbar-btn">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <form className="form-inline ml-5 search-form">
              <i className="fas fa-search" aria-hidden="true"></i>
              <input
                className="form-control form-control-sm ml-3 w-75 search-bar"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onKeyUp={handleSearch}
              />
            </form>

            
          </div>
        </nav>
    )
}

export default Topbar;