import { useState } from "react";
import "./CommonResources/css/bootstrap.css";
import "./CommonResources/css/styles.css";
import MainSection from "./Components/Main/MainSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mac from "./Components/Pages/Mac/Mac";
import Iphone from "./Components/Pages/Iphone/Iphone";
import Ipad from "./Components/Pages/Ipad/Ipad";
import Watch from "./Components/Pages/Watch/Watch";
import Tv from "./Components/Pages/Tv/Tv";
import Music from "./Components/Pages/Music/Music";
import Support from "./Components/Pages/Support/Support";
import Search from "./Components/Pages/Search/Search";
import Cart from "./Components/Pages/Cart/Cart";
import NotFound from "./Components/Pages/NotFound/NotFound";
import SharedLayout from "./Components/Pages/SharedLayout/SharedLayout";
import SingleProduct from "./Components/Pages/Iphone/ProductPage/SingleProduct";
function App() {
	const routeDetail = [
		{ path: "/", element: MainSection },
		{ path: "mac", element: Mac },
		{ path: "iphone", element: Iphone },
		{ path: "iphone/:pid", element: SingleProduct },
		{ path: "ipad", element: Ipad },
		{ path: "Watch", element: Watch },
		{ path: "Tv", element: Tv },
		{ path: "Music", element: Music },
		{ path: "Support", element: Support },
		{ path: "search", element: Search },
		{ path: "cart", element: Cart },
		{ path: "*", element: NotFound },
	];

	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					{routeDetail.map((item, i) => {
						return (
							<Route key={i} path={item.path} element={<item.element />} />
						);
					})}
				</Route>
			</Routes>
		</>
	);
}

export default App;
