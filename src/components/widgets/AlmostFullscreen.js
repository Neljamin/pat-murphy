import styled, { css } from 'styled-components'

export default styled.div`
    min-height: 90vh;
    width: 100%;

    ${props =>
        css`
            background: no-repeat center center fixed;
            background-color: var(--${props.backgroundColor});
            background-image: url(${props.backgroundImage});
            background-size: cover;
    `};
`;
