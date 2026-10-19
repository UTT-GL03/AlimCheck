import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router'

import ProductList from './ProductList'
import ProductPage from './ProductPage'

import '@picocss/pico/css/pico.min.css'
import './App.css'

function App() {
  return (
    <BrowserRouter>

      <header className="container">
        <Link to="/products">
          <h1>AlimCheck</h1>
        </Link>

        <p>
          Rechercher et comparer simplement des produits alimentaires
        </p>
      </header>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App