import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import "./Services.css";

const { Title, Text } = Typography;

const services = [
  {
    id: 1,
    icon: "/images/icons/business-loan.svg",
    title: "Business loans",
    desc: "It is a long established",
  },
  {
    id: 2,
    icon: "/images/icons/checking.svg",
    title: "Checking accounts",
    desc: "It is a long established",
  },
  {
    id: 3,
    icon: "/images/icons/savings.svg",
    title: "Savings accounts",
    desc: "It is a long established",
  },
  {
    id: 4,
    icon: "/images/icons/debit.svg",
    title: "Debit and credit cards",
    desc: "It is a long established",
  },
  {
    id: 5,
    icon: "/images/icons/insurance.svg",
    title: "Life Insurance",
    desc: "It is a long established",
  },
  {
    id: 6,
    icon: "/images/icons/business-loan.svg",
    title: "Business loans",
    desc: "It is a long established",
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Top Stats */}
      <Row gutter={16}>
        <Col xs={24} lg={8}>
          <Card className="service-stat">
            <div className="service-stat-content">
              <img src="/images/icons/insurance.svg" alt="icon" />
              <div>
                <Text>Life Insurance</Text>
                <div className="service-sub">Unlimited protection</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="service-stat">
            <div className="service-stat-content">
              <img src="/images/icons/shopping.svg" alt="icon" />
              <div>
                <Text>Shopping</Text>
                <div className="service-sub">Buy. Think. Grow.</div>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="service-stat">
            <div className="service-stat-content">
              <img src="/images/icons/safety.svg" alt="icon" />
              <div>
                <Text>Safety</Text>
                <div className="service-sub">We are your allies</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Services List */}
      <div className="services-section">
        <Title level={5}>Bank Services List</Title>
        <Card>
          {services.map((item) => (
            <div className="service-item" key={item.id}>
              <div className="service-left">
                <img src={item.icon} alt="icon" />
                <div className="service-info">
                  <div className="service-title">{item.title}</div>
                  <div className="service-desc">{item.desc}</div>
                </div>
              </div>
              <div className="service-cols">
                <div>Lorem Ipsum<br />Many publishing</div>
                <div>Lorem Ipsum<br />Many publishing</div>
                <div>Lorem Ipsum<br />Many publishing</div>
              </div>
              <Button type="default" shape="round">
                View Details
              </Button>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default ServicesPage;
