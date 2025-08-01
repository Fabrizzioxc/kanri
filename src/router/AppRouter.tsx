// src/router/AppRouter.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardPage from "@/modules/dashboard/pages/DashboardPage"
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  )
}