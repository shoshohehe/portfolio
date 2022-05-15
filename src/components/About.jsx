import GitImage from "../images/git.png";
import RailsImage from "../images/rails.png";
import ReactImage from "../images/react.png";
import TerraformImage from "../images/terraform.png";
import AwsImage from "../images/aws.png";
import VueImage from "../images/vue.png";

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
							<img src={RailsImage} alt="RailsImage" width="10%" height="100" padding-right="10"/>
							<img src={AwsImage} alt="AwsImage" width="10%" height="100" padding-right="10"/>
							<img
								src={TerraformImage}
								alt="TerraformImage"
								width="10%"
								height="100"
							padding-right="10"/>
							<img src={ReactImage} alt="ReactImage" width="10%" height="100" padding-right="10"/>
							<img src={VueImage} alt="VueImage" width="10%" height="100" padding-right="10"/>
							<img src={GitImage} alt="GitImage" width="10%" height="100" padding-right="10"/>
						</dd>
					</dl>
				</ul>
			</div>
		</about>
	);
};
