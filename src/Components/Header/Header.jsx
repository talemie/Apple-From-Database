import React, { useState } from "react";
import logosm from "../../CommonResources/images/icons/logo-sm.png";
import search from "../../CommonResources/images/icons/search-icon-sm.png";
import cart from "../../CommonResources/images/icons/cart-sm.png";
import NavLinks from "./NavLinks";
import SearchCart from "./SearchCart";
import { Link } from "react-router-dom";
function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const navItems = [
		{ LinkHref: "/mac/", LinkName: "Mac" },
		{ LinkHref: "/iphone/", LinkName: "iphone" },
		{ LinkHref: "/ipad/", LinkName: "ipad" },
		{ LinkHref: "/Watch/", LinkName: "Watch" },
		{ LinkHref: "/Tv/", LinkName: "Tv" },
		{ LinkHref: "/Music/", LinkName: "Music" },
		{ LinkHref: "/Support/", LinkName: "Support" },
	];
	return (
		<div className="nav-wrapper fixed-top">
			<div className="container">
				<nav className="navbar navbar-toggleable-sm navbar-expand-md">
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target=".navbar-collapse"
						onClick={toggleMenu}
					>
						☰
					</button>
					<Link className="navbar-brand ml-auto" to="/">
						<img src={logosm} />
					</Link>

					<div className={`navbar-collapse ${isMenuOpen ? "" : "collapse"}`}>
						<ul className="navbar-nav nav-justified w-100 nav-fill">
							{navItems.map((item, index) => (
								<NavLinks
									key={index}
									LinkHref={item.LinkHref}
									LinkName={item.LinkName}
								/>
							))}

							<SearchCart iconHref="/search/" imgName={search} />
							<SearchCart iconHref="/cart/" imgName={cart} />
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Header;
