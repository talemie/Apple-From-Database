import React from 'react'
import CommonSection from '../Section1/CommonSection';
function Section2() {
  let sec2Props = {
		secClass: "second-hightlight-wrapper",
		alertCalss: "new-alert",
		alertName: "New",
		titleClass: "title-wraper bold black",
	  title: "MacBook Air",
		buyOrOrder:'Buy',
		descriptionClass: "description-wrapper black",
		description: "Twice the speed. Twice the storage.",
		priceCalss: "price-wrapper grey",
		price: "From $999.",
	};
	return <CommonSection {...sec2Props} />;
}

export default Section2