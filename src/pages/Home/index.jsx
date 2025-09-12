import React from "react";
import "./Home.css";
import { Col, Row } from 'antd';
import BlueCard from "../../components/blue-card";
import WhiteCard from "../../components/white-card";
const Home = () => {
  return (
    <div className="home">
      {/* My Cards */}
      <div className="section-1">
        <Row justify="space-between" gutter={40}>
          <Col xs={24} lg={16}>
            <div className="dual-card mobile-center">
              <Row gutter={50} wrap={false}>
                <Col>
                  <div className="title">My Cards</div>
                  <BlueCard />
                </Col>
                <Col>
                  <div className="title see-all">See All</div>
                  <WhiteCard />
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} lg={8}>
            {/* Right Side */}
            <div className="right-side">
              <div className="mobile-center">
                <div className="recent">
                  <div className="title">Recent Transaction</div>
                  <div className="list-payment">
                    <Row className="item" gutter={10} align="middle">
                      <Col span={6}>
                        <img className="icon" src='/images/home/icon1.svg' alt="icon-payment" />
                      </Col>
                      <Col span={12}>
                        <div className="infor">Deposit from my Card</div>
                        <div className="date">28 January 2021</div>
                      </Col>
                      <Col span={6}>
                        <div className="negative">- $850</div></Col>
                    </Row>
                    <Row className="item" gutter={10} align="middle">
                      <Col span={6}>
                        <img className="icon" src='/images/home/icon2.svg' alt="icon-payment" />

                      </Col>
                      <Col span={12}>
                        <div className="infor">Deposit Paypal</div>
                        <div className="date">28 January 2021</div>
                      </Col>
                      <Col span={6}>
                        <div className="positive">+ $2,500</div>
                      </Col>
                    </Row>
                    <Row className="item" gutter={10} align="middle">
                      <Col span={6}>
                        <img className="icon" src='/images/home/icon3.svg' alt="icon-payment" />
                      </Col>
                      <Col span={12}>
                        <div className="infor">Jemi Wilson</div>
                        <div className="date">28 January 2021</div>
                      </Col>
                      <Col span={6}>
                        <div className="positive">+ $5,400</div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>



      </div>

      <div className="section-2">
        <Row justify="space-between" gutter={40}>
          <Col xs={24} lg={16}>
            <div className="activity">
              <div className="title">Weekly Activity</div>
              <img src="/images/home/chart1.svg" alt="Weekly Activity" />
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div className="expense">
              <div className="title">Expense Statistics</div>
              <div className="mobile-center">
                <img src="/images/home/chart2.svg" alt="Expense Chart" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="section-3">
        <Row justify="space-between" gutter={40}>
          <Col xs={24} lg={10}>
            <div className="title">Quick Transfer</div>
            <div className="mobile-center">
              <div className="transfer-card">
                <div className="people">
                  <Row gutter={25}>
                    <Col>
                      <div className="person">
                        <img src="/images/home/avatar1.svg" alt="user" />
                        <div className="name">Livia Bator</div>
                        <div className="role">CEO</div>
                      </div>
                    </Col>
                    <Col>
                      <div className="person">
                        <img src="/images/home/avatar2.svg" alt="user" />
                        <div className="name">Randy Press</div>
                        <div className="role">Director</div>
                      </div>
                    </Col>
                    <Col>
                      <div className="person">
                        <img src="/images/home/avatar3.svg" alt="user" />
                        <div className="name">Workman</div>
                        <div className="role">Designer</div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="transfer-form">
                  <Row align="middle">
                    <Col span={8}>
                      <div className="transfer-title">Write Amount</div>
                    </Col>
                    <Col span={16}>
                      <div className="groupBtn">
                        <input type="text" placeholder="Write Amount" onChange={(e) => { }} />
                        <div className="btn">
                          <img src="/images/home/planeiconbtn.svg" alt="icon-transfer" />
                          Send
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={14}>
            <div className="balance">
              <div className="title">Balance History</div>
              <div className="mobile-center">
                <img src="/images/home/chart3.svg" alt="Balance History" />
              </div>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  );
};

export default Home;
