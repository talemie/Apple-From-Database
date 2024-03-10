import React from "react";
import CommonSection from "../Section1/CommonSection";
function Section3() {
	let sec3Props = {
		secClass: "third-hightlight-wrapper",
		titleClass: "title-wraper bold",
		title: "iPhone 11 Pro",
		descriptionClass: "description-wrapper",
		description: "Pro cameras. Pro display. Pro performance.",
		buyOrOrder:'Buy',
		priceCalss: "price-wrapper",
		price: "From $24.95/mo. or $599 with trade‑in.",
	};
	return <CommonSection {...sec3Props} />;
}

export default Section3;
