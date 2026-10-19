import { Link, useParams } from 'react-router'
import data from './assets/sample_data.json'

function ProductPage() {
  const { id } = useParams()

  const product = data.products.find(
    (product) => String(product.id) === id
  )

  if (!product) {
    return (
      <main className="container">
        <h2>Produit introuvable</h2>
        <Link to="/products">Retour aux produits</Link>
      </main>
    )
  }

  return (
    <main className="container">
      <nav>
        <Link to="/products">← Retour aux produits</Link>
      </nav>

      <article>
        <header>
          <h2>{product.name}</h2>
          <p>
            {product.brand} — {product.category}
          </p>
        </header>

        <h3>Ingrédients</h3>
        <p>{product.ingredients.join(', ')}</p>

        <h3>Allergène</h3>
        <p>{product.allergen}</p>

        <h3>Informations nutritionnelles</h3>

        <table>
          <tbody>
            <tr>
              <th>Énergie</th>
              <td>{product.nutrition.energy_kcal} kcal</td>
            </tr>
            <tr>
              <th>Protéines</th>
              <td>{product.nutrition.proteins_g} g</td>
            </tr>
            <tr>
              <th>Glucides</th>
              <td>{product.nutrition.carbohydrates_g} g</td>
            </tr>
            <tr>
              <th>Sucres</th>
              <td>{product.nutrition.sugars_g} g</td>
            </tr>
            <tr>
              <th>Matières grasses</th>
              <td>{product.nutrition.fat_g} g</td>
            </tr>
            <tr>
              <th>Sel</th>
              <td>{product.nutrition.salt_g} g</td>
            </tr>
          </tbody>
        </table>

        <h3>Caractéristiques</h3>

        <ul>
          <li>Bio : {product.organic ? 'Oui' : 'Non'}</li>
          <li>Vegan : {product.vegan ? 'Oui' : 'Non'}</li>
          <li>Végétarien : {product.vegetarian ? 'Oui' : 'Non'}</li>
          <li>Sans gluten : {product.glutenFree ? 'Oui' : 'Non'}</li>
          <li>
            Certification halal : {product.halalCertification}
          </li>
        </ul>
      </article>
    </main>
  )
}

export default ProductPage