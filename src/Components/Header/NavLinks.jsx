import React from 'react'
import { Link } from 'react-router-dom';

function NavLinks(props) {
  return (
		<li className="nav-item">
			<Link className="nav-link js-scroll-trigger" to={props.LinkHref}>
				{props.LinkName}
			</Link>
		</li>
	);
}

export default NavLinks