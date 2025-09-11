import React from "react";
import { Row, Col, Card, Typography, Button, Input, DatePicker } from "antd";
import "./Cards.css";

const { Title, Text } = Typography;

const cardList = [
  { id: 1, bank: "DBL Bank", number: "**** **** 5600", name: "William", type: "Secondary", color: "#E5F0FF" },
  { id: 2, bank: "BRC Bank", number: "**** **** 4300", name: "Michel", type: "Secondary", color: "#FFE6E6" },
  { id: 3, bank: "ABM Bank", number: "**** **** 7560", name: "Edward", type: "Secondary", color: "#FFF9E6" },
];

const settings = [
  { id: 1, icon: "/images/icons/block.svg", title: "Block Card", desc: "Instantly block your card" },
  { id: 2, icon: "/images/icons/pin.svg", title: "Change Pin Code", desc: "Choose another pin code" },
  { id: 3, icon: "/images/icons/googlepay.svg", title: "Add to Google Pay", desc: "Withdraw without any card" },
  { id: 4, icon: "/images/icons/applepay.svg", title: "Add to Apple Pay", desc: "Withdraw without any card" },
  { id: 5, icon: "/images/icons/appstore.svg", title: "Add to App Store", desc: "Withdraw without any card" },
];

const CreditCardsPage = () => {
  return (
    <div className="cards-page">
      {/* My Cards */}
      <Title level={5}>My Cards</Title>
      <Row gutter={16}>
        <Col xs={24} lg={8}>
          <Card className="credit-card blue">
            <div className="balance">$5,756</div>
            <div className="holder">Eddy Cusuma</div>
            <div className="valid">12/22</div>
            <div className="number">3778 **** **** 1234</div>
            <div className="switch">○</div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="credit-card purple">
            <div className="balance">$5,756</div>
            <div className="holder">Eddy Cusuma</div>
            <div className="valid">12/22</div>
            <div className="number">3778 **** **** 1234</div>
            <div className="switch">○</div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="credit-card gray">
            <div className="balance">$5,756</div>
            <div className="holder">Eddy Cusuma</div>
            <div className="valid">12/22</div>
            <div className="number">3778 **** **** 1234</div>
            <div className="switch">○</div>
          </Card>
        </Col>
      </Row>

      {/* Stats + List */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col xs={24} lg={10}>
          <Card title="Card Expense Statistics">
            <img src="/images/cards/pie.svg" alt="chart" style={{ width: "100%" }} />
            <div className="legend">
              <span style={{ color: "#FF4D4F" }}>● BRC Bank</span>
              <span style={{ color: "#1890FF" }}>● DBL Bank</span>
              <span style={{ color: "#52C41A" }}>● ABM Bank</span>
              <span style={{ color: "#FAAD14" }}>● MCP Bank</span>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={14}>
          <Card title="Card List">
            {cardList.map((c) => (
              <div className="card-list-item" key={c.id} style={{ background: c.color }}>
                <div className="card-info">
                  <div><b>Card Type</b><br />{c.type}</div>
                  <div><b>Bank</b><br />{c.bank}</div>
                  <div><b>Card Number</b><br />{c.number}</div>
                  <div><b>Namaim Card</b><br />{c.name}</div>
                </div>
                <Button type="link">View Details</Button>
              </div>
            ))}
          </Card>
        </Col>
      </Row>

      {/* Add New Card + Settings */}
      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col xs={24} lg={14}>
          <Card title="Add New Card">
            <p className="desc">
              Credit Card generally means a plastic card issued by Scheduled Commercial Banks...
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
