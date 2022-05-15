import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

export const Contact = () => {
	return (
		<about>
			<div className="contact-container">
				<h2 className="contact-h2">Contact</h2>
				<hr />
				<ul className="contact-snslist">
					<FaGithub size="3rem"/>
					<FaTwitter size="3rem"/>
					<FaFacebook size="3rem"/>
				</ul>
			</div>
		</about>
	);
};
