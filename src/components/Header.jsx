import ProfileImage from "../images/profile-image.jpg";
import MenuImage from "../images/menu-image.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import AnchorLink from "react-anchor-link-smooth-scroll";

import React, { useState } from "react";

export const Header = () => {
	const [buttonState, setState] = useState(true);

	return (
		<header
			className="cover-image"
			style={{ backgroundImage: `url(${ProfileImage})` }}
		>
			{buttonState === true ? (
				<button
					type="button"
					onClick={() => setState(false)}
					className="hamburger-menu"
				>
					<GiHamburgerMenu size="4rem" />
				</button>
			) : (
				<div
					className="menu-image"
					style={{ backgroundImage: `url(${MenuImage})` }}
				>
					<button
						type="button"
						onClick={() => setState(true)}
						className="close-menu"
					>
						<VscChromeClose size="4rem" />
					</button>
					<ul className="menu-list">
						<li>
							<AnchorLink
								href="#about-container"
								offset="20"
								onClick={() => setState(true)}
							>
								About
							</AnchorLink>
						</li>
						<li>
							<AnchorLink
								href="#certificate-container"
								offset="20"
								onClick={() => setState(true)}
							>
								Certificate
							</AnchorLink>
						</li>
						<li>
							<AnchorLink
								href="#contact-container"
								offset="20"
								onClick={() => setState(true)}
							>
								Contact
							</AnchorLink>
						</li>
					</ul>
				</div>
			)}

			<div className="header-container">
				<h1 className="header-title">Shohei Miyakita</h1>
			</div>
		</header>
	);
};
