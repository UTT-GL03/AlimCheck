import { useEffect, useState } from 'react'
import { Link } from 'react-router'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/sample_data.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products)
      })
  }, [])

  return (
    <main className="container">
      <h2>Produits alimentaires</h2>

      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id}>
            <header>
              <strong>{product.category}</strong>
            </header>

            <h3>
              <Link to={`/products/${product.id}`}>
                {product.name}
              </Link>
            </h3>

            <p>{product.brand}</p>

            <small>
              Nutri-Score : {product.nutriScore}
            </small>
          </article>
        ))}
      </div>
    </main>
  )
}

export default ProductList