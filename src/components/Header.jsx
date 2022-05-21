import ProfileImage from "../images/profile-image.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

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
				<button
					type="button"
					onClick={() => setState(true)}
					className="hamburger-menu"
				>
					<VscChromeClose size="4rem" />
				</button>
			)}
			<div className="header-container">
				<h1 className="header-title">Shohei Miyakita</h1>
			</div>
		</header>
	);
};
