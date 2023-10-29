import styled from 'styled-components';
import { Card, Container, Heading } from 'components';
import { Salunkhe, Mane, Sapkal} from 'images';

export default function Members() {
	return (
		<Container>
			<Heading gradient margin='huge'>
				Event Coordinators
			</Heading>
			<CoreBox>
				<Card
					imgSrc={Mane}
					name='Anuj Mane'
					position='Technical Secretary'
				/>
				<Card
					imgSrc={Salunkhe}
					name='Prof.Priyanka Salunkhe'
					position='Event Coordinator'
					isSpecial
				/>
				<Card
					imgSrc={Sapkal}
					name='Kunal Sapkal'
					position='Technical Secretary'
				/>
			</CoreBox>
		</Container>
	);
}

const CoreBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 3rem;

	@media only screen and (max-width: 1000px) {
		& > div:nth-child(even) {
			order: -1;
		}
	}

	@media only screen and (max-width: 600px) {
		flex-direction: column;
		align-items: center;
	}
`;
