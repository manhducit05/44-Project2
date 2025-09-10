import { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./MainLayout.scss";

const { Content, Sider } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  // List menu
  const menuItems = [
    {
      key: "/",
      label: "Dashboard",
      icon: { default: "/icons/home.svg", active: "/icons/home-active.svg" },
    },
    {
      key: "/transactions",
      label: "Transactions",
      icon: { default: "/icons/transaction.svg", active: "/icons/transaction-active.svg" },
    },
    {
      key: "/accounts",
      label: "Accounts",
      icon: { default: "/icons/account.svg", active: "/icons/account-active.svg" },
    },
    {
      key: "/investments",
      label: "Investments",
      icon: { default: "/icons/investment.svg", active: "/icons/investment-active.svg" },
    },
    {
      key: "/credit-cards",
      label: "Credit Cards",
      icon: { default: "/icons/credit-card.svg", active: "/icons/credit-card-active.svg" },
    },
    {
      key: "/loans",
      label: "Loans",
      icon: { default: "/icons/loan.svg", active: "/icons/loan-active.svg" },
    },
    {
      key: "/services",
      label: "Services",
      icon: { default: "/icons/service.svg", active: "/icons/service-active.svg" },
    },
    {
      key: "/settings",
      label: "Settings",
      icon: { default: "/icons/setting.svg", active: "/icons/setting-active.svg" },
    },
  ];

  return (
    <div className="container">
      <Layout className="main-layout">
        {/* Sidebar */}
        <Sider
          width={220}
          className={`sidebar ${collapsed ? "collapsed" : ""}`}
          trigger={null}
          collapsible
        >
          <div className="logo">
            <img alt="logo" src="/images/logo.png" />
          </div>

          {/* Close button chỉ hiện trên mobile */}
          <button className="close-btn" onClick={() => setCollapsed(false)}>
            <CloseOutlined />
          </button>

          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems.map((item) => ({
              key: item.key,
              icon: (
                <img
                  src={
                    location.pathname === item.key
                      ? item.icon.active
                      : item.icon.default
                  }
                  alt={item.label}
                  className="menu-icon"
                />
              ),
              label: <Link to={item.key}>{item.label}</Link>,
              onClick: () => setCollapsed(false), // đóng sidebar trên mobile
            }))}
          />
        </Sider>

        {/* Right Layout */}
        <Layout className="right-layout">
          <div className="header">
            {/* Hàng 1 */}
            <div className="top-row">
              <Button
                className="menu-btn"
                icon={<MenuOutlined />}
                onClick={() => setCollapsed(!collapsed)}
              />
              <div className="page-active">
                {menuItems.find((item) => item.key === location.pathname)?.label}
              </div>
              <div className="header-right">
                <div className="search-box desktop-only">
                  <button type="button" className="search-btn">
                    <img src="/icons/search.svg" alt="Search" />
                  </button>
                  <input type="text" placeholder="Search for something" />
                </div>
                <div className="setting-header desktop-only">
                  <img src="/icons/setting-header.svg" alt="icon-setting" />
                </div>
                <div className="notification-header desktop-only">
                  <img src="/icons/notification-header.svg" alt="icon-notification" />
                </div>
                <img className="avatar" src="/images/avatar.png" alt="avatar" />
              </div>
            </div>

            {/* Hàng 2 (chỉ mobile) */}
            <div className="bottom-row mobile-only">
              <div className="search-box">
                <button type="button" className="search-btn">
                  <img src="/icons/search.svg" alt="Search" />
                </button>
                <input type="text" placeholder="Search for something" />
              </div>
            </div>
          </div>

          <Content className="content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
