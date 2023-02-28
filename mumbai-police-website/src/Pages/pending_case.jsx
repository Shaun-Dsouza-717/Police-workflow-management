import React from "react";
import Navbar from "../Components/navbar";
import Service from "../Components/service-component";
import FooterComponent from "../Components/Footer";
import "./pending_pages.css"

const Pending_case = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="Case-details">
        <span id="one">Zone 22</span>
        <span id="two">Total :- 8</span>
        <span id="three">Pending :- 4</span>
        <span id="four">Solved:- 4</span>
      </div>
      <div className="table-conatiner1-heading">
        <h2>Pending Cases</h2>
      </div>
      <div className="table-container1">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Case Name</th>
              <th>Section</th>
              <th>PDF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2-02-2022</td>
              <td>Raikar Case</td>
              <td>Section 447</td>
              <td>
                <button className="pendingbutton">Download Pdf</button>
              </td>
            </tr>
            <tr>
              <td>12-12-2012</td>
              <td>Ambolkar Case</td>
              <td>Section 370</td>
              <td>
                <button className="pendingbutton">Download Pdf</button>
              </td>
            </tr>
            <tr>
              <td>18-03-2018</td>
              <td>Shetty Case</td>
              <td>Section 384</td>
              <td>
                <button className="pendingbutton">Download Pdf</button>
              </td>
            </tr>
            <tr>
              <td>2-02-2022</td>
              <td>Raijumal Case</td>
              <td>Section 420</td>
              <td>
                <button className="pendingbutton">Download Pdf</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-conatiner2-heading">
        <h2>Solved Cases</h2>
      </div>
      <div className="table-container2">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Case Name</th>
              <th>Section</th>
              <th>PDF</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>19-02-2022</td>
              <td>Wadkar Case</td>
              <td>Section 375 & 376</td>
              <td>
                <button className="pendingbutton">Download Pdf</button>
              </td>
            </tr>
            <tr>
              <td>15-04-2020</td>
              <td>Sharma Case</td>
              <td>Section 269</td>
              <td>
                <button className="pendingbutton">Download Pdf</button>
              </td>
            </tr>
            <tr>
              <td>07-03-2022</td>
              <td>Surve Case</td>
              <td>Section 302</td>
              <td>
                <button className="pendingbutton">Download Pdf</button>
              </td>
            </tr>
            <tr>
              <td>26-11-2013</td>
              <td>Dawood Case</td>
              <td>Section 121</td>
              <td>
                <button className="pendingbutton">Download Pdf</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <Service /> */}
      <FooterComponent />
    </div>
  );
};

export default Pending_case; 