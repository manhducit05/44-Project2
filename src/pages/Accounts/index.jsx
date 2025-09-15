import React from "react";
import { Row, Col, Card, Table } from "antd";
import "./Accounts.css";
import LightBlueCard from "../../components/lightblue-card";

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

  const columnsTransactions = [
    {
      title: "Images",
      dataIndex: "img",
      className: "col-img",
      render: (src) => (
        <img src={"/images/accounts/" + src} alt="card" />
      ),
    },
    { title: "Name", className: "col-name", dataIndex: "name", },
    { title: "Type", className: "col-type hide-mobile", dataIndex: "type" },
    { title: "Card", className: "col-card hide-mobile", dataIndex: "card" },
    { title: "Status", className: "col-status hide-mobile", dataIndex: "status" },
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

  const columnsInvoices = [
    {
      title: "Icon",
      dataIndex: "img",
      className:"invoice-icon",
      render: (src) => (
        <img src={"/images/accounts/" + src} alt="invoice-icon" />
      ),
    },
    {
      title: "Info",
      render: (_, record) => (
        <div>
          <div className="invoice-name">{record.name}</div>
          <div className="invoice-time">{record.time}</div>
        </div>
      ),
    },
    {
      title: "Amount",
      className:"invoice-amount",

      dataIndex: "amount",
      render: (val) => <div className="invoice-amount">${val}</div>,
    },
  ];

  return (
    <div className="accounts-page">
      {/* Summary Cards */}
      <Row gutter={16} align="stretch">
        {[
          { title: "My Balance", value: 12750, icon: "icon-balance.svg" },
          { title: "Income", value: 5600, icon: "icon-income.svg" },
          { title: "Expense", value: 3460, icon: "icon-expense.svg" },
          { title: "Total Saving", value: 7920, icon: "icon-saving.svg" },
        ].map((item) => (
          <Col xs={12} lg={6} key={item.title} style={{ display: "flex" }} >
            <Card className="summary-card" style={{ flex: 1 }}>
              <div className="summary-content">
                <img src={`/images/accounts/` + item.icon} alt="stat" className="summary-icon" />
                <div className="summary-info">
                  <div className="summary-title">{item.title}</div>
                  <div className="summary-money">${item.value}</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Transaction + Card */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col xs={24} lg={16}>
          <div className="title">Last Transaction</div>
          <Table
            columns={columnsTransactions}
            dataSource={transactions}
            pagination={false}
            rowKey="key"
            showHeader={false}
            className="transaction-table"
          />
        </Col>
        <Col xs={24} lg={8}>
          <div className="title">My card</div>
          <div className="center">
            <LightBlueCard />
          </div>
        </Col>
      </Row>

      {/* Chart + Invoices */}
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col xs={24} lg={17}>
          <div className="title">Debit & Credit Overview</div>
          <div className="mobile-center">
            <img src="/images/accounts/chart1.svg" alt="chart" className="invoice-chart" />
          </div>
        </Col>
        <Col xs={24} lg={7}>
          <div className="title">Invoices Sent</div>
          <Table
            columns={columnsInvoices}
            dataSource={invoices}
            pagination={false}
            rowKey="id"
            showHeader={false}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AccountsPage;
