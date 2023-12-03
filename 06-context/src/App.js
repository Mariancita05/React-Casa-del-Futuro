import { useContext } from "react";
import Products from "./components/Products";
import { products } from "./data/products";
import Header from "./components/Header";
import { FilterContext } from "./context/ContextFilter";

function App() {

/*  REMPLAZADO POR CONTEXT
    const [filters , setFilters] = useState({
    category: "all",
    minPrice: 0
  }) */

  const {filters} = useContext(FilterContext)

  const filterProducts = (products) =>{
    return products.filter( product =>{
      return(
        product.price >= filters.minPrice && 
        (
          filters.category === "all" ||
          product.category === filters.category 
        )
      )
    })
  }

  const filteredProduct = filterProducts(products)

  return (
    <>
      <Header/>
      <Products products={filteredProduct} />
    </>
  );
}

export default App;
