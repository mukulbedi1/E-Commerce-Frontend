import Navbar from "../features/Navbar/Navbar";
import ProductList from "../features/product-list/ProductList";

function Home() {
    return (
        <Navbar>
            <ProductList></ProductList>
        </Navbar>
    );
}

export default Home;