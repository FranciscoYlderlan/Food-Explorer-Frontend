import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Preview } from '../pages/Preview'
import { Favorites } from '../pages/Favorites'

import { Cart } from '../pages/Cart'
import { Orders } from '../pages/Orders'

import { Create } from '../pages/Create'
import { Update } from '../pages/Update'

export function AppAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  )
}
