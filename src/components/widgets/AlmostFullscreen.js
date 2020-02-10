import styled, { css } from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    width: 100%;
    padding: 40px 0;

    ${props =>
        css`
            background: no-repeat center center fixed;
            background-color: var(--${props.backgroundColor});
            background-image: url(${props.backgroundImage});
            background-size: cover;
    `};
`;
