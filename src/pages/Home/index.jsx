import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* My Cards */}
      <div className="card-section">
        <div className="section-header">
          <h3>My Cards</h3>
          <a href="#">See All</a>
        </div>
        <div className="cards">
          <div className="card blue-card">
            <p className="balance">Balance</p>
            <h2>$5,756</h2>
            <p className="holder">CARD HOLDER<br />Eddy Cusuma</p>
            <p className="valid">VALID THRU<br />12/22</p>
            <p className="number">3778 **** **** 1234</p>
          </div>
          <div className="card white-card">
            <p className="balance">Balance</p>
            <h2>$5,756</h2>
            <p className="holder">CARD HOLDER<br />Eddy Cusuma</p>
            <p className="valid">VALID THRU<br />12/22</p>
            <p className="number">3778 **** **** 1234</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="right-side">
        <div className="recent">
          <h3>Recent Transaction</h3>
          <ul>
            <li>
              <span>Deposit from my Card</span>
              <span className="negative">- $850</span>
            </li>
            <li>
              <span>Deposit Paypal</span>
              <span className="positive">+ $2,500</span>
            </li>
            <li>
              <span>Jemi Wilson</span>
              <span className="positive">+ $5,400</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">
        <div className="activity">
          <h3>Weekly Activity</h3>
          <img src="/images/home/chart1.svg" alt="Weekly Activity" />
        </div>
        <div className="expense">
          <h3>Expense Statistics</h3>
          <img src="/images/home/chart2.svg" alt="Expense Chart" />
        </div>


      </div>
      <div>
        <div className="transfer">
          <h3>Quick Transfer</h3>
          <div className="people">
            <div className="person">
              <img src="/images/home/avatar1.svg" alt="user" />
              <p>Livia Bator<br /><small>CEO</small></p>
            </div>
            <div className="person">
              <img src="/images/home/avatar2.svg" alt="user" />
              <p>Randy Press<br /><small>Director</small></p>
            </div>
            <div className="person">
              <img src="/images/home/avatar3.svg" alt="user" />
              <p>Workman<br /><small>Designer</small></p>
            </div>
          </div>
          <div className="transfer-form">
            <input type="text" placeholder="Write Amount" value="525.50" />
            <button>Send</button>
          </div>
        </div>
        <div className="balance">
          <h3>Balance History</h3>
          <img src="/images/home/chart3.svg" alt="Balance History" />
        </div>
      </div>
    </div>
  );
};

export default Home;
