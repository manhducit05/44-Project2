import React from "react";
import { Row, Col, Card, Button } from "antd";
import "./Services.css";


const serviceStats = [
  {
    icon: "/images/services/icon-a.svg",
    label: "Life Insurance",
    sub: "Unlimited protection",
  },
  {
    icon: "/images/services/icon-b.svg",
    label: "Shopping",
    sub: "Buy. Think. Grow.",
  },
  {
    icon: "/images/services/icon-c.svg",
    label: "Safety",
    sub: "We are your allies",
  },
];

const services = [
  {
    id: 1,
    icon: "/images/services/icon1.svg",
    title: "Business loans",
    desc: "It is a long established",
  },
  {
    id: 2,
    icon: "/images/services/icon2.svg",
    title: "Checking accounts",
    desc: "It is a long established",
  },
  {
    id: 3,
    icon: "/images/services/icon3.svg",
    title: "Savings accounts",
    desc: "It is a long established",
  },
  {
    id: 4,
    icon: "/images/services/icon4.svg",
    title: "Debit and credit cards",
    desc: "It is a long established",
  },
  {
    id: 5,
    icon: "/images/services/icon5.svg",
    title: "Life Insurance",
    desc: "It is a long established",
  },
  {
    id: 6,
    icon: "/images/services/icon6.svg",
    title: "Business loans",
    desc: "It is a long established",
  },
];

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Top Stats */}
      <Row gutter={16}>
        {serviceStats.map((service, index) => (
          <Col key={index} xs={24} lg={8}>
            <Card className="service-stat">
              <div className="service-stat-content">
                <img src={service.icon} alt="icon" />
                <div>
                  <div className="service-title">{service.label}</div>
                  <div className="service-sub">{service.sub}</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Services List */}
      <div className="services-section">
        <div className="title">Bank Services List</div>
        <Card>
          {services.map((item) => (
            <div className="service-item" key={item.id}>
              <div className="service-left">
                <img src={item.icon} alt="icon" />
                <div className="service-info">
                  <div className="item-title">{item.title}</div>
                  <div className="item-desc">{item.desc}</div>
                </div>
              </div>
              <div className="service-cols">
                <div className="item-data">
                  <div className="item-title">Lorem Ipsum</div>
                  <div className="item-desc">Many publishing</div>
                </div>
                <div className="item-data">
                  <div className="item-title">Lorem Ipsum</div>
                  <div className="item-desc">Many publishing</div>
                </div>
                <div className="item-data">
                  <div className="item-title">Lorem Ipsum</div>
                  <div className="item-desc">Many publishing</div>
                </div>
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
