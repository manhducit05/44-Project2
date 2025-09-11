import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import "./Loans.css";

const { Title, Text } = Typography;

const loans = [
  {
    id: 1,
    money: "$100,000",
    left: "$40,500",
    duration: "8 Months",
    rate: "12%",
    installment: "$2,900 / month",
  },
  {
    id: 2,
    money: "$500,000",
    left: "$250,000",
    duration: "36 Months",
    rate: "10%",
    installment: "$8,000 / month",
  },
  {
    id: 3,
    money: "$900,000",
    left: "$40,500",
    duration: "12 Months",
    rate: "12%",
    installment: "$5,000 / month",
  },
  {
    id: 4,
    money: "$40,000",
    left: "$40,500",
    duration: "25 Months",
    rate: "15%",
    installment: "$1,200 / month",
  },
  {
    id: 5,
    money: "$350,000",
    left: "$40,500",
    duration: "5 Months",
    rate: "18%",
    installment: "$10,000 / month",
  },
  {
    id: 6,
    money: "$80,000",
    left: "$25,500",
    duration: "14 Months",
    rate: "8%",
    installment: "$2,900 / month",
  },
  {
    id: 7,
    money: "$12,000",
    left: "$5,500",
    duration: "9 Months",
    rate: "13%",
    installment: "$500 / month",
  },
  {
    id: 8,
    money: "$120,000",
    left: "$100,800",
    duration: "3 Months",
    rate: "12%",
    installment: "$900 / month",
  },
];

const LoansPage = () => {
  return (
    <div className="loans-page">
      {/* Top Stats */}
      <Row gutter={16}>
        <Col xs={24} lg={6}>
          <Card className="loan-stat">
            <div className="loan-stat-content">
              <img src="/images/icons/personal.svg" alt="icon" />
              <div>
                <Text>Personal Loans</Text>
                <Title level={4}>$50,000</Title>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={6}>
          <Card className="loan-stat">
            <div className="loan-stat-content">
              <img src="/images/icons/corporate.svg" alt="icon" />
              <div>
                <Text>Corporate Loans</Text>
                <Title level={4}>$100,000</Title>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={6}>
          <Card className="loan-stat">
            <div className="loan-stat-content">
              <img src="/images/icons/business.svg" alt="icon" />
              <div>
                <Text>Business Loans</Text>
                <Title level={4}>$500,000</Title>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={6}>
          <Card className="loan-stat">
            <div className="loan-stat-content">
              <img src="/images/icons/custom.svg" alt="icon" />
              <div>
                <Text>Custom Loans</Text>
                <Title level={4}>Choose Money</Title>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Loans Table */}
      <div className="loans-section">
        <Title level={5}>Active Loans Overview</Title>
        <Card>
          <div className="loan-table">
            <div className="loan-header">
              <div>Sl. No</div>
              <div>Loan Money</div>
              <div>Left to repay</div>
              <div>Duration</div>
              <div>Interest rate</div>
              <div>Installment</div>
              <div>Repay</div>
            </div>

            {loans.map((loan, index) => (
              <div className="loan-row" key={loan.id}>
                <div>{String(index + 1).padStart(2, "0")}.</div>
                <div>{loan.money}</div>
                <div>{loan.left}</div>
                <div>{loan.duration}</div>
                <div>{loan.rate}</div>
                <div>{loan.installment}</div>
                <div>
                  <Button type="primary" size="small" shape="round">
                    Repay
                  </Button>
                </div>
              </div>
            ))}

            <div className="loan-total">
              <div>Total</div>
              <div>$125,000</div>
              <div>$750,000</div>
              <div></div>
              <div></div>
              <div>$50,000 / month</div>
              <div></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoansPage;
