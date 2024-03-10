import React from 'react'
import CommonSection from './CommonSection';

function Section1() {
    let sec1Props = {
			secClass: "first-hightlight-wrapper",
			alertCalss: "new-alert",
			alertName: "New",
			titleClass: "title-wraper bold black",
		title: "iPad Pro",
			buyOrOrder:'Order',
			ipadBottomDesc: "iPad Pro available starting 3.25",
		};
  return (
      <CommonSection {...sec1Props} />
  )
}

export default Section1