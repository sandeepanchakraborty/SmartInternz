// Q2: Create a product details page
// Code By - Sandeepan Chakraborty (21MIM10072)


import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return product ? (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: {product.price}</p>
    </div>
  ) : (<p>Product not found</p>);
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
