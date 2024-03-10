import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductPage() {
	const [products, setProducts] = useState([]);
	let localDBdata = "/iphoneProducts.json";
	let actualDBdate = "http://localhost:3006/iphones";
	useEffect(() => {
		fetch(localDBdata)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
			});
		// console.log('mounted from product page');
		window.scrollTo(0, 0);
	}, []);
	// console.log(products);
	return (
		<div className="container text-center justify-content-center align-items-center">
			<div className="mt-5 pt-3">
				<h2 className="product-title">Iphones</h2>
				<h3>The best for the brightest</h3>
			</div>
			{products?.map((singleProduct, i) => {
				const {
					product_url,
					product_img,
					product_name,
					product_brief_description,
					starting_price,
					price_range,
					product_description,
				} = singleProduct;
				return (
					<div className="container" key={i}>
						<div className="row my-2">
							<div
								className={`col-sm-12 col-md-6 my-auto mt-3 order-${
									i % 2 == 0 ? "1" : "2"
								}`}
							>
								<div className="product-title">{product_name}</div>
								<div className="brief-description">
									{product_brief_description}
								</div>
								<div>{starting_price}</div>
								<div>{price_range}</div>
								<div className="iphone-description-wrapper">
									{product_description}
								</div>
								<div className="links-wrapper">
									<ul>
										<li>
											<Link to={`/iphone/${product_url}`}>Learn more</Link>
										</li>
									</ul>
								</div>
							</div>
							<div
								className={`col-sm-12 col-md-6 my-auto order-${
									i % 2 == 0 ? "2" : "1"
								}`}
							>
								<img src={product_img} alt="" />
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ProductPage;
