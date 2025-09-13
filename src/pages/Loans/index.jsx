import React from "react";
import { Row, Col, Card, Button, Table, Typography } from "antd";
import { useEffect, useState } from 'react'
import "./Loans.css";

const { Title, Text } = Typography;
const loanStats = [
  {
    icon: "/images/loans/icon1.svg",
    label: "Personal Loans",
    value: "$50,000",
  },
  {
    icon: "/images/loans/icon2.svg",
    label: "Corporate Loans",
    value: "$100,000",
  },
  {
    icon: "/images/loans/icon3.svg",
    label: "Business Loans",
    value: "$500,000",
  },
  {
    icon: "/images/loans/icon4.svg",
    label: "Custom Loans",
    value: "Choose Money",
  },
];
const loanData = [
  {
    key: 1,
    loan: "$100,000",
    left: "$40,500",
    duration: "8 Months",
    rate: "12%",
    installment: "$2,000 / month",
  },
  {
    key: 2,
    loan: "$500,000",
    left: "$250,000",
    duration: "36 Months",
    rate: "10%",
    installment: "$8,000 / month",
  },
  {
    key: 3,
    loan: "$900,000",
    left: "$40,500",
    duration: "12 Months",
    rate: "12%",
    installment: "$5,000 / month",
  },
  {
    key: 4,
    loan: "$50,000",
    left: "$40,500",
    duration: "25 Months",
    rate: "5%",
    installment: "$2,000 / month",
  },
  {
    key: 5,
    loan: "$50,000",
    left: "$40,500",
    duration: "5 Months",
    rate: "16%",
    installment: "$10,000 / month",
  },
  {
    key: 6,
    loan: "$80,000",
    left: "$25,500",
    duration: "14 Months",
    rate: "8%",
    installment: "$2,000 / month",
  },
  {
    key: 7,
    loan: "$12,000",
    left: "$5,500",
    duration: "9 Months",
    rate: "13%",
    installment: "$500 / month",
  },
  {
    key: 8,
    loan: "$160,000",
    left: "$100,800",
    duration: "3 Months",
    rate: "12%",
    installment: "$900 / month",
  },
];

const fullColumns = [
  { title: "SL No", dataIndex: "key", key: "key", render: (t) => `0${t}.` },
  { title: "Loan Money", dataIndex: "loan", key: "loan" },
  { title: "Left to repay", dataIndex: "left", key: "left" },
  { title: "Duration", dataIndex: "duration", key: "duration" },
  { title: "Interest rate", dataIndex: "rate", key: "rate" },
  { title: "Installment", dataIndex: "installment", key: "installment" },
  { title: "Repay", key: "action", render: () => <Button type="default" shape="round">Repay</Button> },
];

const mobileColumns = [
  { title: "Loan Money", dataIndex: "loan", key: "loan" },
  { title: "Left to repay", dataIndex: "left", key: "left" },
  { title: "Repay", key: "action", render: () => <Button type="default" shape="round">Repay</Button> },
];

const LoansPage = () => {
  const [isSmall, setIsSmall] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="loans-page">
      {/* Top Stats */}
      <Row gutter={16}>
        {loanStats.map((stat, index) => (
          <Col key={index} xs={24} lg={6}>
            <Card className="loan-stat">
              <div className="loan-stat-content">
                <img src={stat.icon} alt="icon" />
                <div>
                  <div className="label">{stat.label}</div>
                  <div className="value">{stat.value}</div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Loans Table */}
      <div className="loans-section">
        <Title level={5}>Active Loans Overview</Title>
        <Table
          columns={isSmall ? mobileColumns : fullColumns}
          dataSource={loanData}
          pagination={false}
          summary={() => (
            <Table.Summary.Row>
              {isSmall ? (
                <>
                  <Table.Summary.Cell index={0}><b>Total</b></Table.Summary.Cell>
                  <Table.Summary.Cell index={1}>
                    $750,000
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={2} />
                </>
              ) : (
                <>
                  <Table.Summary.Cell index={0}><b>Total</b></Table.Summary.Cell>
                  <Table.Summary.Cell index={1}>
                    $125,0000
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={2}>
                    $750,000
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={3} />
                  <Table.Summary.Cell index={4} />
                  <Table.Summary.Cell index={5}>
                    $50,000 / month
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={6} />
                </>
              )}
            </Table.Summary.Row>
          )}
        />
      </div>
    </div>
  );
};

export default LoansPage;
