import React, { useState, useEffect } from "react";
import { Row, Col, Card, Typography, Button, Input, DatePicker } from "antd";
import "./Cards.css";
import BlueCard from "../../components/blue-card";
import WhiteCard from "../../components/white-card";
import LightBlueCard from "../../components/lightblue-card";

const { Title } = Typography;

const cardList = [
  { id: 1, icon: "/images/creditcard/icon-a.svg", bank: "DBL Bank", number: "**** **** 5600", name: "William", type: "Secondary", color: "#E5F0FF" },
  { id: 2, icon: "/images/creditcard/icon-b.svg", bank: "BRC Bank", number: "**** **** 4300", name: "Michel", type: "Secondary", color: "#FFE6E6" },
  { id: 3, icon: "/images/creditcard/icon-c.svg", bank: "ABM Bank", number: "**** **** 7560", name: "Edward", type: "Secondary", color: "#FFF9E6" },
];

const settings = [
  { id: 1, icon: "/images/creditcard/icon1.svg", title: "Block Card", desc: "Instantly block your card" },
  { id: 2, icon: "/images/creditcard/icon2.svg", title: "Change Pin Code", desc: "Choose another pin code" },
  { id: 3, icon: "/images/creditcard/icon3.svg", title: "Add to Google Pay", desc: "Withdraw without any card" },
  { id: 4, icon: "/images/creditcard/icon4.svg", title: "Add to Apple Pay", desc: "Withdraw without any card" },
  { id: 5, icon: "/images/creditcard/icon4.svg", title: "Add to App Store", desc: "Withdraw without any card" },
];

const CreditCardsPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 744);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 744);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="cards-page">
      {/* My Cards */}
      <Title level={5}>My Cards</Title>
      {isMobile ? (
        // Mobile: scroll ngang
        <div className="cards-scroll">
          <div className="cards-row">
            <div className="scroll-card"><LightBlueCard /></div>
            <div className="scroll-card"><BlueCard /></div>
            <div className="scroll-card"><WhiteCard /></div>
          </div>
        </div>
      ) : (
        // Desktop: 3 cột chuẩn
        <Row gutter={16}>
          <Col span={8}><LightBlueCard /></Col>
          <Col span={8}><BlueCard /></Col>
          <Col span={8}><WhiteCard /></Col>
        </Row>
      )}

      {/* Stats + List */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col xs={24} lg={8}>
          <Card className="card-center" title="Card Expense Statistics">
            <img src="/images/creditcard/chart1.svg" alt="chart" className="expense-chart" />
          </Card>
        </Col>
        <Col xs={24} lg={16}>
          <div title="card-list">
            <div className="card-list-tile title">Card List</div>
            {cardList.map((c) => (
              <div className="card-list-item" key={c.id}>
                <div className="card-info">
                  <img src={c.icon} alt="icon" />
                  <div className="label"><b>Card Type</b><br /><div className="value">{c.type}</div></div>
                  <div className="label"><b>Bank</b><br /><div className="value">{c.bank}</div></div>
                  <div className="label hidden-mobile"><b>Card Number</b><br /><div className="value">{c.number}</div></div>
                  <div className="label hidden-mobile"><b>Name on Card</b><br /><div className="value">{c.name}</div></div>
                </div>
                <Button type="link">View Details</Button>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/* Add New Card + Settings */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col xs={24} lg={14}>
          <Card title="Add New Card">
            <p className="desc">
              Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
            </p>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Input placeholder="Card Type" />
              </Col>
              <Col xs={24} md={12}>
                <Input placeholder="Name On Card" defaultValue="My Cards" />
              </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: 12 }}>
              <Col xs={24} md={12}>
                <Input placeholder="Card Number" />
              </Col>
              <Col xs={24} md={12}>
                <DatePicker style={{ width: "100%" }} placeholder="Expiration Date" />
              </Col>
            </Row>
            <Button type="primary" style={{ marginTop: 16 }}>Add Card</Button>
          </Card>
        </Col>
        <Col xs={24} lg={10}>
          <Card title="Card Setting">
            {settings.map((s) => (
              <div className="setting-item" key={s.id}>
                <img src={s.icon} alt="icon" />
                <div className="setting-info">
                  <div className="setting-title">{s.title}</div>
                  <div className="setting-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CreditCardsPage;
