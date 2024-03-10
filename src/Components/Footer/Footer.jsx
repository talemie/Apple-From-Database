import React from 'react'
import FooterList from './FooterList';
import flag from '../../CommonResources/images/icons/16.png'
function Footer() {

 
		let shop = [
			"Mac",
			"iPad",
			"iPhone",
			"Watch",
			"TV",
			"Music",
			"AirPods",
			"HomePod",
			"iPod touch",
			"Accessories",
			"Gift Cards",
		];
		let ServiceAccount = [
			{
				title: "Services",
				services: [
					"Apple Music",
					"Apple News+",
					"Apple TV+",
					"Apple Arcade",
					"Apple Card",
					"iCloud",
				],
			},
			{
				title: "Account",
				services: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
			},
		];

		let governmentEdu = [
			{
				title: "For Business",
				services: ["Apple and Business", "Shop for Business"],
			},
			{
				title: "For Education",
				services: ["Apple and Education", "Shop for College"],
			},
			{
				title: "For Healthcare",
				services: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
			},
			{
				title: "For Government",
				services: ["Apple and Education", "Shop for College"],
			},
		];

		let appleStore = [
			"Find a Store",
			"Genius Bar",
			"Today at Apple",
			"Apple Camp",
			"Field Trip",
			"Apple Store App",
			"Refurbished and Clearance",
			"Financing",
			"Apple Trade In",
			"Order Status",
			"Shopping Help",
		];

		let appleStoreValues = [
			{
				title: "Apple Values",
				services: [
					"Find a Store",
					"ApGenius Bar",
					"Today at Apple",
					"Apple Camp",
					"Field Trip",
					"Apple Store App",
				],
			},
			{
				title: "About Apple",
				services: [
					"Find a Store",
					"ApGenius Bar",
					"Today at Apple",
					"Apple Camp",
					"Field Trip",
					"Apple Store App",
				],
			},
		];

		return (
			<>
				<footer className="footer-wrapper">
					<div className="container">
						<div className="upper-text-container">
							<p>
								1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
								promotional pricing is after trade‑in of iPhone 8 Plus and
								iPhone X in good condition. Additional trade‑in values require
								purchase of a new iPhone, subject to availability and limits.
								Must be at least 18. Apple or its trade-in partners reserve the
								right to refuse or limit any Trade In transaction for any
								reason. In‑store trade‑in requires presentation of a valid,
								government-issued photo ID (local law may require saving this
								information). Sales tax may be assessed on full value of new
								iPhone. Additional terms from Apple or Apple’s trade-in partners
								may apply. Monthly pricing: Available to qualified customers and
								requires 0% APR, 24-month installment loan with Citizens One or
								Apple Card Monthly Installments and iPhone activation with AT&T,
								Sprint, T-Mobile, or Verizon. Taxes and shipping not included.
								Additional Apple Card Monthly Installments terms are in the{" "}
								<a
									href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
									target="_blank"
								>
									{" "}
									Customer Agreement
								</a>
								. Additional iPhone Payments terms are{" "}
								<a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
									{" "}
									here
								</a>
								.
							</p>
							<p>
								2. Subscription required.
								<br />
								<br />
								Magic Keyboard sold separately.
								<br />
								<br />
								Apple TV+ is $4.99/month after free trial. One subscription per
								Family Sharing group. Offer good for 3 months after eligible
								device activation. Plan automatically renews until cancelled.
								Restrictions and other{" "}
								<a href="https://www.apple.com/promo/">terms </a> apply.
							</p>
						</div>
						<div className="footer-links-wrapper row">
							<div className="links-wrapper-1 col-sm-12 col-md">
								<FooterList title="Shop and Learn" items={shop} />
							</div>
							<div className="links-wrapper-2 col-sm-12 col-md">
								{ServiceAccount.map((item, index) => (
									<FooterList
										key={index}
										title={item.title}
										items={item.services}
									/>
								))}
							</div>
							<div className="links-wrapper-3 col-sm-12 col-md">
								<FooterList title="Apple Store" items={appleStore} />
							</div>
							<div className="links-wrapper-4 col-sm-12 col-md">
								{governmentEdu.map((item, index) => (
									<FooterList
										key={index}
										title={item.title}
										items={item.services}
									/>
								))}
							</div>
							<div className="links-wrapper-5 col-sm-12 col-md">
								{appleStoreValues.map((item, index) => (
									<FooterList
										key={index}
										title={item.title}
										items={item.services}
									/>
								))}
							</div>
						</div>
						<div className="my-apple-wrapper">
							More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
							<a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
						</div>
						<div className="copyright-wrapper row">
							<div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
								Copyright &copy; 2020 Apple Inc. All rights reserved.
							</div>
							<div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
								<ul>
									<li>
										<a href="#">Privacy Policy</a>
									</li>
									<li>
										<a href="#">Terms of Use</a>
									</li>
									<li>
										<a href="#">Sales and Refunds</a>
									</li>
									<li>
										<a href="#">Legal</a>
									</li>
									<li>
										<a href="#">Site Map</a>
									</li>
								</ul>
							</div>
							<div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
								<div className="flag-wrapper">
									<img src={flag} />
								</div>{" "}
								<div className="footer-country-name">United States</div>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
}

export default Footer