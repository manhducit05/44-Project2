import React from "react";
import { Row, Col, Card, Statistic, Table, Button } from "antd";
import "./Accounts.css";
import { CreditCardOutlined } from "@ant-design/icons";

const AccountsPage = () => {
  // dữ liệu Last Transaction
  const transactions = [
    {
      key: "1",
      img: "icon-ring.svg",
      name: "Spotify Subscription",
      type: "Shopping",
      card: "1234 ****",
      status: "Pending",
      amount: -150,
    },
    {
      key: "2",
      img: "icon-setting.svg",

      name: "Mobile Service",
      type: "Service",
      card: "1234 ****",
      status: "Completed",
      amount: -340,
    },
    {
      key: "3",
      img: "icon-user.svg",
      name: "Emilly Wilson",
      type: "Transfer",
      card: "1234 ****",
      status: "Completed",
      amount: 780,
    },
  ];

  const columns = [
    {
      title: "Images",
      dataIndex: "img",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Card",
      dataIndex: "card",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      render: (val) => (
        <span style={{ color: val < 0 ? "red" : "green" }}>
          {val < 0 ? `-$${Math.abs(val)}` : `+$${val}`}
        </span>
      ),
    },
  ];

  // dữ liệu invoices
  const invoices = [
    { id: 1, img: "card-setting-1.svg", name: "Apple Store", time: "5h ago", amount: 450 },
    { id: 2, img: "card-setting-2.svg", name: "Michael", time: "2 days ago", amount: 160 },
    { id: 3, img: "card-setting-3.svg", name: "Playstation", time: "5 days ago", amount: 1085 },
    { id: 4, img: "card-setting-4.svg", name: "William", time: "10 days ago", amount: 90 },
  ];

  return (
    <div className="accounts-page">
      {/* Summary Cards */}
      <Row gutter={16}>
        <Col xs={24} md={12} lg={6}>
          <Card className="summary-card">
            <Statistic
              title="My Balance"
              value={12750}
              prefix={
                <img
                  className="card-icon"
                  src="/images/accounts/icon1.svg"
                  alt="income"
                />
              }
            />
          </Card>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Card className="summary-card">
            <Statistic
              title="Income"
              value={5600}
              prefix={
                <img
                  className="card-icon"
                  src="/images/accounts/icon-income.svg"
                  alt="income"
                />
              }
            />
          </Card>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Card className="summary-card">
            <Statistic
              title="Expense"
              value={3460}
              prefix={
                <img
                  className="card-icon"
                  src="/images/accounts/icon-expense.svg"
                  alt="income"
                />
              }
            />
          </Card>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <Card className="summary-card">
            <Statistic title="Total Saving" value={7920}
              prefix={
                <img
                  className="card-icon"
                  src="/images/accounts/icon-saving.svg"
                  alt="income"
                />
              }
            />
          </Card>
        </Col>
      </Row>

      {/* Transaction + Card */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col xs={24} lg={14} className="responsive-col">
          <Card title="Last Transaction">
            <Table
              columns={columns}
              dataSource={transactions}
              pagination={false}
              rowKey="key"
              showHeader={false}   // 👈 ẩn phần thead

            />
          </Card>
        </Col>
        <Col xs={24} lg={10} className="responsive-col">
          <Card
            title="My Card"
            extra={<Button type="link">See All</Button>}
            className="credit-card-wrapper"
          >
            <div className="credit-card">
              <div className="balance">$5,756</div>
              <div className="holder">CARD HOLDER: Eddy Cusuma</div>
              <div className="valid">VALID THRU: 12/22</div>
              <div className="number">3778 **** **** 1234</div>
              <CreditCardOutlined className="card-icon" />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Chart + Invoices */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col xs={24} lg={14} className="responsive-col">
          <Card title="Debit & Credit Overview">
            <img src="/images/accounts/chart1.svg" alt="chart" />
          </Card>
        </Col>
        <Col xs={24} lg={10} className="responsive-col">
          <Card title="Invoices Sent">
            {invoices.map((item) => (
              <div className="invoice-item" key={item.id}>
                <div className="invoice-icon">
                  <img src={'/images/accounts/' + item.img} alt="invoice-icon" />
                </div>
                <div className="invoice-info">
                  <div className="invoice-name">{item.name}</div>
                  <div className="invoice-time">{item.time}</div>
                </div>
                <div className="invoice-amount">${item.amount}</div>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AccountsPage;
