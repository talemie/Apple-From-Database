import React from 'react'

function FooterList(props) {
    const myItems =     props.items;
  return (
		<>
			<h3>{props.title}</h3>
			<ul>
				{myItems.map((item, index) => (
					<li key={index}>
						<a href="#">{item}</a>
					</li>
				))}
			</ul>
		</>
	);
}

export default FooterList