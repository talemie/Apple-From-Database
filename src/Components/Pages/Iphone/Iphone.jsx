import React, { useState } from "react";
import ProductPage from "./ProductPage/ProductPage";

function Iphone() {
	const [products, setProducts] = useState([]);

	return (
		<section>
			<ProductPage />
		</section>
	);
}

export default Iphone;
