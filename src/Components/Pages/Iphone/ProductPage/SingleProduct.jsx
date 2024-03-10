import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../NotFound/NotFound";
import axios from 'axios'

function SingleProduct() {
	const [products, setProducts] = useState([]);
	const { pid } = useParams();
	let localDBdata = "/iphoneProducts.json";
	let actualDBdate = "http://localhost:3006/iphones";
	// console.log(pid);

	async function getData() {
		try {
			const response = await axios.get(localDBdata);
			const responseJson= response.data
			let filteredRes = responseJson.filter((item) => item.product_url === pid);
			setProducts(filteredRes);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		getData();
		// console.log('Mounted');
		window.scrollTo(0, 0);

	}, []);
	// console.log(products);
	if (products.length) {
		return (
			<>
				{products.map((singleProduct, i) => {
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
						<div
							className="container text-center justify-content-center align-items-center"
							key={i}
						>
							<div className="mt-5 pt-3">
								<h2 className="product-title">{product_name}</h2>
								<h3>{product_brief_description}</h3>
							</div>
							<div className="row ">
								<div
									className={`col-sm-12 col-md-6 my-auto mt-3
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
								</div>
								<div
									className={`col-sm-12 col-md-6 my-auto 
								}`}
								>
									<img src={product_img} alt="" />
								</div>
							</div>
						</div>
					);
				})}
			</>
		);
	} else {
		return <NotFound />;
	}
}

export default SingleProduct;
