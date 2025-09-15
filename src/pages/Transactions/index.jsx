import React, { useState, useEffect } from "react";
import { Col, Row } from 'antd';
import './Transaction.css'
import { Tabs, Table, Button, Pagination } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import BlueCard from "../../components/blue-card";
import WhiteCard from "../../components/white-card";
const TransactionsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      key: 1,
      description: "Spotify Subscription",
      transactionId: "#12548796",
      type: "Shopping",
      card: "1234 ****",
      date: "28 Jan, 12.30 AM",
      amount: -2500,
    },
    {
      key: 2,
      description: "Freepik Sales",
      transactionId: "#12548796",
      type: "Transfer",
      card: "1234 ****",
      date: "25 Jan, 10.40 PM",
      amount: 750,
    },
    {
      key: 3,
      description: "Mobile Service",
      transactionId: "#12548796",
      type: "Service",
      card: "1234 ****",
      date: "20 Jan, 10.40 AM",
      amount: -150,
    },
    {
      key: 4,
      description: "Wilson",
      transactionId: "#12548796",
      type: "Transfer",
      card: "1234 ****",
      date: "15 Jan, 03.29 PM",
      amount: -1050,
    },
    {
      key: 5,
      description: "Emilly",
      transactionId: "#12548796",
      type: "Transfer",
      card: "1234 ****",
      date: "14 Jan, 10.40 PM",
      amount: 840,
    },
  ];

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Card",
      dataIndex: "card",
      key: "card",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => (
        <span style={{ color: amount < 0 ? "red" : "green" }}>
          {amount < 0 ? `-$${Math.abs(amount)}` : `+$${amount}`}
        </span>
      ),
    },
    {
      title: "Receipt",
      key: "receipt",
      render: () => (
        <Button type="default" color="default" variant="outlined">
          Download
        </Button>
      ),
    },
  ];
  return (
    <div className="transaction">
      <div className="section-1">
        <Row justify="space-between" gutter={40}>
          <Col xs={24} lg={16}>
            <div className="dual-card mobile-center">
              {isMobile ? (
                <div className="cards-scroll">
                  <div className="cards-row">
                    <div className="scroll-card">
                      <div className="title">My Cards</div>
                      <BlueCard />
                    </div>
                    <div className="scroll-card">
                      <div className="title see-all">See All</div>
                      <WhiteCard chipSrc="/images/home/Chip_Card3.svg" />
                    </div>
                  </div>
                </div>
              ) : (
                // 👉 Desktop
                <Row gutter={50} wrap={false}>
                  <Col>
                    <div className="title">My Cards</div>
                    <BlueCard />
                  </Col>
                  <Col>
                    <div className="title see-all">See All</div>
                    <WhiteCard chipSrc="/images/home/Chip_Card3.svg" />
                  </Col>
                </Row>
              )}
            </div>
          </Col>
          <Col xs={24} lg={8}>
            {/* Right Side */}
            <div className="right-side">
              <div className="mobile-center">
                <div className="expense">
                  <div className="title">My Expense</div>
                  <div className="mobile-center">
                    <img src="/images/transaction/chart1.svg" alt="chart" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>



      </div>
      <div className="section-2 transactions-container">
        <h3 className="transactions-title">Recent Transactions</h3>
        {/* <Tabs defaultActiveKey="1" className="transactions-tabs">
          <TabPane tab="All Transactions" key="1">
            {!isMobile ? (
              <>
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  rowClassName="transaction-row"
                />
                <div className="pagination-container">
                  <Pagination
                    current={currentPage}
                    pageSize={5}
                    total={20}
                    onChange={(page) => setCurrentPage(page)}
                    showSizeChanger={false}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="transaction-list">
                  {data.map((item) => (
                    <div key={item.key} className="transaction-card">
                      <div className="transaction-left">
                        {item.amount < 0 ? (
                          <ArrowUpOutlined className="arrow up" />
                        ) : (
                          <ArrowDownOutlined className="arrow down" />
                        )}
                        <div>
                          <div className="desc">{item.description}</div>
                          <div className="date">{item.date}</div>
                        </div>
                      </div>
                      <div
                        className={`amount ${item.amount < 0 ? "negative" : "positive"}`}
                      >
                        {item.amount < 0
                          ? `-$${Math.abs(item.amount)}`
                          : `+$${item.amount}`}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pagination-container">
                  <Pagination
                    current={currentPage}
                    pageSize={5}
                    total={20}
                    onChange={(page) => setCurrentPage(page)}
                    showSizeChanger={false}
                  />
                </div>
              </>
            )}
          </TabPane>
          <TabPane tab="Income" key="2">
            <p>Income transactions...</p>
          </TabPane>
          <TabPane tab="Expense" key="3">
            <p>Expense transactions...</p>
          </TabPane>
        </Tabs> */}
        <Tabs
          defaultActiveKey="1"
          className="transactions-tabs"
          items={[
            {
              key: "1",
              label: "All Transactions",
              children: !isMobile ? (
                <>
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    rowClassName="transaction-row"
                  />
                  <div className="pagination-container">
                    <Pagination
                      current={currentPage}
                      pageSize={5}
                      total={20}
                      onChange={(page) => setCurrentPage(page)}
                      showSizeChanger={false}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="transaction-list">
                    {data.map((item) => (
                      <div key={item.key} className="transaction-card">
                        <div className="transaction-left">
                          {item.amount < 0 ? (
                            <ArrowUpOutlined className="arrow up" />
                          ) : (
                            <ArrowDownOutlined className="arrow down" />
                          )}
                          <div>
                            <div className="desc">{item.description}</div>
                            <div className="date">{item.date}</div>
                          </div>
                        </div>
                        <div
                          className={`amount ${item.amount < 0 ? "negative" : "positive"}`}
                        >
                          {item.amount < 0
                            ? `-$${Math.abs(item.amount)}`
                            : `+$${item.amount}`}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pagination-container">
                    <Pagination
                      current={currentPage}
                      pageSize={5}
                      total={20}
                      onChange={(page) => setCurrentPage(page)}
                      showSizeChanger={false}
                    />
                  </div>
                </>
              ),
            },
            {
              key: "2",
              label: "Income",
              children: <p>Income transactions...</p>,
            },
            {
              key: "3",
              label: "Expense",
              children: <p>Expense transactions...</p>,
            },
          ]}
        />
      </div>
    </div>
  )
}
export default TransactionsPage;