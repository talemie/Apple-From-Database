import React from 'react'
import { Link } from 'react-router-dom';

function SearchCart(props) {
  return (
		<li className="nav-item">
			<Link className="nav-link js-scroll-trigger" to={props.iconHref}>
				<img src={props.imgName} />
			</Link>
		</li>
	);
}

export default SearchCart