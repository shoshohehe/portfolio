import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

export const Contact = () => {
	return (
		<about>
			<div className="contact-container">
				<h2 className="contact-h2">Contact</h2>
				<hr />
				<ul className="contact-snslist">
					<a href="https://github.com/shoshohehe">
						<FaGithub size="4rem" />
					</a>
					<a href="https://twitter.com/sh0shoabc">
						<FaTwitter size="4rem" />
					</a>
					<a href="https://www.facebook.com/profile.php?id=100021195338884">
						<FaFacebook size="4rem" />
					</a>
				</ul>
			</div>
		</about>
	);
};
