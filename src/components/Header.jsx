import ProfileImage from "../images/profile-image.jpg";

export const Header = () => {
	return (
		<header
			className="cover-image"
			style={{ backgroundImage: `url(${ProfileImage})` }}
		>
			<div className="container">
				<h1 className="title">Shohei Miyakita</h1>
			</div>
		</header>
	);
};
