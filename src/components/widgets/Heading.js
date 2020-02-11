import React from 'react';
import styled, { css } from 'styled-components'

const StyledH1 = styled.h1`
    ${props =>
        css`
            color: ${props.invert ? 'var(--white)' : 'auto'};
    `};
`;

const Heading = ({
    children,
    invert,
    type = 'h1'
}) => {
    return (
        <StyledH1 invert={invert}>
            {children}
        </StyledH1>
    )
};

export default Heading;