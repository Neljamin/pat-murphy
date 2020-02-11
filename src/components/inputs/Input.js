import React from 'react'
import styled, { css } from 'styled-components'

const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLabel = styled.label`
    margin-bottom: 4px;
    margin-top: 8px;

    ${props =>
        css`
            color: ${props.invert ? 'var(--white)' : 'auto'};
    `};
`;

const StyledTextInput = styled.input`
    margin: 0;
`;

const StyledTextAreaInput = styled.textarea`
    margin: 0;
    resize: none;
    max-width: 99%;
    min-width: 99%;
    min-height: 150px;
    max-height: 150px;
`;

const ImageWithDescription = ({
    label,
    invert,
    type = 'text'
}) => {
    return (
        <StyledInput>
            <StyledLabel invert={invert}>
                {label}
            </StyledLabel>
            {type === 'text' && <StyledTextInput type={type} />}
            {type === 'textarea' && <StyledTextAreaInput />}
        </StyledInput>
    )
};

export default ImageWithDescription;
