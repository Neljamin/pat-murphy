import React from 'react'
import styled, { css } from 'styled-components'

const StyledImageWithDescription = styled.div`
    display: flex;
    margin: 48px 0;
    flex-direction: column;

    @media (min-width: 768px) {
        ${props =>
            css`
                flex-direction: ${props.imagePosition === 'right' ? 'row-reverse' : 'row'}
        `};
    }
`;

const StyledImg = styled.img`
    max-height: 400px;
    object-fit: contain;
    margin: 0;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        ${props =>
            css`
                margin-right: ${props.imagePosition === 'left' ? '20px' : ''};
                margin-left: ${props.imagePosition === 'right' ? '20px' : ''};
        `};
    }
`;

const ImageWithDescription = ({
    text,
    imageSrc,
    imagePosition = 'left'
}) => {
    return (
        <StyledImageWithDescription
            imagePosition={imagePosition}
        >
            <StyledImg
                src={imageSrc}
                alt=""
                imagePosition={imagePosition}
            />
            <span>
                {text}
            </span>
        </StyledImageWithDescription>
    )
};

export default ImageWithDescription;
