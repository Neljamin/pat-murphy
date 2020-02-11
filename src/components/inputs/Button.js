import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
    ${props =>
        css`
            color: ${props.invert ? 'var(--white)' : 'auto'};
    `};
`;

const ImageWithDescription = ({
    label,
    invert
}) => {
    return (
        <StyledButton>
            {label}
        </StyledButton>
    )
};

export default ImageWithDescription;