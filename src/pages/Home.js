import NavBar from "../features/Navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </div>
     );
}

export default Home;