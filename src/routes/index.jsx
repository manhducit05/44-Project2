import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Skeleton } from "antd";
import MainLayout from "../layout/MainLayout";

// Lazy load pages
const Home = lazy(() => import("../pages/Home"));
const TransactionsPage = lazy(() => import("../pages/Transactions"));
const AccountsPage = lazy(() => import("../pages/Accounts"));
const InvestmentsPage = lazy(() => import("../pages/Investments"));
const CreditCardsPage = lazy(() => import("../pages/Credit-cards"));
const LoansPage = lazy(() => import("../pages/Loans"));
const ServicesPage = lazy(() => import("../pages/Services"));
const SettingsPage = lazy(() => import("../pages/Settings"));

// Fallback component
const LoadingFallback = () => (
  <div style={{ padding: 24 }}>
    <Skeleton active paragraph={{ rows: 8 }} />
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="accounts" element={<AccountsPage />} />
          <Route path="investments" element={<InvestmentsPage />} />
          <Route path="credit-cards" element={<CreditCardsPage />} />
          <Route path="loans" element={<LoansPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
