import React from "react";
import { Row, Col, Card, Typography } from "antd";
import "./Investment.css";

const { Title, Text } = Typography;

const investments = [
  {
    id: 1,
    name: "Apple Store",
    category: "E-commerce, Marketplace",
    value: "$54,000",
    return: "+16%",
    img: "/images/investment/appleicon.svg",
    returnClass: "positive",
  },
  {
    id: 2,
    name: "Samsung Mobile",
    category: "E-commerce, Marketplace",
    value: "$25,300",
    return: "-4%",
    img: "/images/investment/googleicon.svg",
    returnClass: "negative",
  },
  {
    id: 3,
    name: "Tesla Motors",
    category: "Electric Vehicles",
    value: "$8,200",
    return: "+25%",
    img: "/images/investment/teslaicon.svg",
    returnClass: "positive",
  },
];

const trending = [
  { id: 1, name: "Trivago", price: "$520", return: "+5%", returnClass: "positive" },
  { id: 2, name: "Canon", price: "$480", return: "+10%", returnClass: "positive" },
  { id: 3, name: "Uber Food", price: "$350", return: "-3%", returnClass: "negative" },
  { id: 4, name: "Nokia", price: "$940", return: "+2%", returnClass: "positive" },
  { id: 5, name: "Tiktok", price: "$670", return: "-12%", returnClass: "negative" },
];

const InvestmentPage = () => {
  return (
    <div className="investment-page">
      {/* Top Stats */}
      <Row gutter={16}>
        <Col xs={24} lg={8}>
          <Card className="stat-card">
            <div className="stat-content">
              <img src="/images/investment/moneyicon.svg" alt="stat" className="stat-icon" />
              <div>
                <Text>Total Invested Amount</Text>
                <Title level={4}>$150,000</Title>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="stat-card">
            <div className="stat-content">
              <img src="/images/investment/percenticon.svg" alt="stat" className="stat-icon" />
              <div>
                <Text>Number of Investments</Text>
                <Title level={4}>1,250</Title>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="stat-card">
            <div className="stat-content">
              <img src="/images/investment/transfericon.svg" alt="stat" className="stat-icon" />
              <div>
                <Text>Rate of Return</Text>
                <Title level={4}>+5.80%</Title>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Charts */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col xs={24} lg={12}>
          <Title level={5}>Yearly Total Investment</Title>
          <Card>
            <img src="/images/investment/chart1.svg" alt="chart" className="chart-img" />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Title level={5}>Monthly Revenue</Title>
          <Card>
            <img src="/images/investment/chart2.svg" alt="chart" className="chart-img" />
          </Card>
        </Col>
      </Row>

      {/* Investment & Trending */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col xs={24} lg={12}>
          <Title level={5}>My Investment</Title>
          <Card>
            {investments.map((item) => (
              <div className="investment-item" key={item.id}>
                <div className="investment-icon">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="investment-info">
                  <div className="investment-name">{item.name}</div>
                  <div className="investment-category">{item.category}</div>
                </div>
                <div className="investment-value">
                  <div>{item.value}</div>
                  <div className={`investment-return ${item.returnClass}`}>{item.return}</div>
                </div>
              </div>
            ))}
          </Card>
        </Col>

        <Col xs={24} lg={12}>
          <Title level={5}>Trending Stock</Title>
          <Card>
            <div className="trending-stock">
              {trending.map((item, index) => (
                <div className="trending-row" key={item.id}>
                  <div className="slno">{String(index + 1).padStart(2, "0")}.</div>
                  <div className="name">{item.name}</div>
                  <div className="price">{item.price}</div>
                  <div className={`return ${item.returnClass}`}>{item.return}</div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default InvestmentPage;
