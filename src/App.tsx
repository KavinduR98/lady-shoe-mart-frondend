import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/common/Layout'
import HomePage from '@/pages/public/HomePage'
import ProductsPage from '@/pages/public/ProductPage'
import CategoriesPage from '@/pages/public/CategoryPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import NotFoundPage from '@/pages/public/NotFoundPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="admin" element={<AdminDashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App