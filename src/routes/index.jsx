import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import TransactionsPage from "../pages/Transactions";
import AccountsPage from "../pages/Accounts";
import InvestmentsPage from "../pages/Investments";
import CreditCardsPage from "../pages/Credit-cards";
import LoansPage from "../pages/Loans";
import ServicesPage from "../pages/Services";
import SettingsPage from "../pages/Settings";

export default function AppRoutes() {
  return (
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
  );
}
