import React from "react";

function CommonSection(props) {
	const {
		secClass,
		alertCalss,
		alertName,
		titleClass,
		title,
		descriptionClass,
		description,
		priceCalss,
		price,
		buyOrOrder,
		ipadBottomDesc
	} = props;
	return (
		<section className={secClass}>
			<div className="container">
				<div className={alertCalss}>{alertName}</div>

				<div className={titleClass}>{title}</div>
				<div className={descriptionClass}>{description}</div>
				<div className={priceCalss}>{price}</div>
				<div className="links-wrapper">
					<ul>
						<li>
							<a href="">Learn more</a>
						</li>
						<li>
							<a href="">{buyOrOrder}</a>
						</li>
					</ul>
				</div>
				{ipadBottomDesc && (
					<div className="ipod-caption row">
						<div className="col-sm-12 col-md-6 text-md-right">
							{ipadBottomDesc}
						</div>
						<div className="col-sm-12 col-md-6 text-md-left">
							Magic Keyboard coming in May
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default CommonSection;
