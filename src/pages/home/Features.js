import styled from 'styled-components';
import Feature from './FeatureItem';
import { Container, Heading } from 'components';
import { meeting, team, devStats, interview } from 'images';

export default function Features() {
	return (
		<Container>
			<Heading gradient>Rounds Information</Heading>
			<InnerContainer>
				<Feature
					title='Round 1: Aptitude'
					imgSrc={team}
					para='In the aptitude round, we are going to include questions from TCS, Wipro, Hexaware, and Infosys aptitude question. For this round, we have allotted 30 minutes for 30 questions. Based on the results from this round, we will shortlist candidates for the next group discussion round.'
				></Feature>

				<Feature
					title='Round 2: Group Discussion'
					imgSrc={meeting}
					para="In the group discussion (GD), we divide students into specific groups. Our team will provide a topic for the GD, and we will shortlist students based on the judges' results. Selected students will have the opportunity to participate in the problem-solving round."
				></Feature>

				<Feature
					title='Round 3: Problem Solving'
					imgSrc={devStats}
					para="This round is the last one for Sambhav 2k23. In this round, our team will provide desktops and internet access for taking the test. The selected participants will have a time limit of 30 minutes, and the questions will be based on basic DSA concepts. Based on the test case scores, we will finalize the top 3 students."
				></Feature>

				<Feature
					title='Benefits of Participation'
					imgSrc={interview}
					para="Through this event, we aim to ensure that all participants can test their levels for placement preparation. From an interview perspective, we will provide participation and excellence certificates."
				></Feature>
			</InnerContainer>
		</Container>
	);
}

const InnerContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 6rem;
	margin: 3rem auto 6rem auto;

	max-width: 100rem;
`;
