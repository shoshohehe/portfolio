import {
	SiRuby,
	SiRubyonrails,
	SiTerraform,
	SiAmazonaws,
	SiReact,
	SiHtml5,
	SiCss3,
} from "react-icons/si";

export const About = () => {
	return (
		<about>
            <div className="about-container">
				<h2 className="about-h2">About</h2>
				<hr />
				<ul className="about-textlist">
					<li>宮北 祥平</li>
					<li>Shohei Miyakita</li>
					<li>WebEngineer</li>
					<li>2020/04~</li>
					<dl>
						<dt>Skills</dt>
						<dd>
							<SiRuby size="4rem" />
							<SiRubyonrails size="4rem" />
							<SiTerraform size="4rem" />
							<SiAmazonaws size="4rem" />
							<SiReact size="4rem" />
							<SiHtml5 size="4rem" />
							<SiCss3 size="4rem" />
						</dd>
					</dl>
				</ul>
			</div>
		</about>
	);
};
