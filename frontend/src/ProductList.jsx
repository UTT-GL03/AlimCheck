import { Link } from 'react-router'
import data from './assets/sample_data.json'

function ProductList() {
  return (
    <main className="container">
      <h2>Produits alimentaires</h2>

      <div className="product-grid">
        {data.products.map((product) => (
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