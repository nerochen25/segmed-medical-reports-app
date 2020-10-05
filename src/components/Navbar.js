import React from "react";

class Navbar extends React.Component {
    handleOnDrop = (e) => {
        // console.log(e);
    }

    allowDrop = (e) => {
        // console.log(e)
    }

    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header mt-3">
                    <h1 className="text-center">Segmed</h1>
                </div>

                <ul className="list-unstyled components mt-5">
                    <h4 className="text-center">Medical Reports</h4>
                    <li className='goodreport droptarget mt-5 mb-5'>
                        <a href="#">#goodreport (1)</a>
                    </li>
                    <li className='conditionreport droptarget mt-5 mb-5' onDrop={(e) => this.handleOnDrop(e)} onDragOver={(e) => this.allowDrop(e)}>
                        <a href="#">#conditionpresent (2)</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
