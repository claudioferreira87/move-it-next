import styled from 'styled-components';
import '../../styles/global';

export const Bar = styled.header`
	display: flex;
	align-items: center;

	span {
		font-size: 1rem;
	}

	& > div {
		flex: 1;
		height: 4px;
		border-radius: 4px;
		background: var(--gray-line);
		margin: 0 1.5rem;
		position: relative;
	}
`;
