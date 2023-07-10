import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Preview } from '../pages/Preview'
import { Favorites } from '../pages/Favorites'

import { Cart } from '../pages/Cart'
import { Orders } from '../pages/Orders'

export function AppUserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders/:id" element={<Orders />} />
    </Routes>
  )
}
