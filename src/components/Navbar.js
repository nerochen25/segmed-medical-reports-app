import React from "react";
import '../css/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
        <nav id="sidebar">
                <div className="sidebar-header">
                    <h3 className="text-center">Segmed</h3>
                </div>

                <ul className="list-unstyled components">
                    <h4 className="text-center">Medical Reports</h4>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Home 1</a>
                            </li>
                            <li>
                                <a href="#">Home 2</a>
                            </li>
                            <li>
                                <a href="#">Home 3</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li className='goodreport'>
                        <a href="#">#goodreport (1)</a>
                    </li>
                    <li className='conditionreport'>
                        <a href="#">#conditionpresent (2)</a>
                    </li>
                </ul>
            </nav>
      
    );
  }
}

export default Navbar;
