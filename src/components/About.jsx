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
							<SiRuby size="2rem"/>
							<SiRubyonrails size="2rem"/>
							<SiTerraform size="2rem"/>
                            <SiAmazonaws size="2rem"/>
                            <SiReact size="2rem"/>
                            <SiHtml5 size="2rem"/>
                            <SiCss3 size="2rem"/>
						</dd>
					</dl>
				</ul>
			</div>
		</about>
	);
};
