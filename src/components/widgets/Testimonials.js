import React from 'react'
import styled, { css } from 'styled-components'

const StyledTestimonials = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const StyledTestimonial = styled.div`
    @media (min-width: 768px) {
        ${props =>
            css`
                margin-left: ${props.first === true ? '0' : '10px'};
                margin-right: ${props.last === true ? '0' : '10px'};
        `};
    }
`;

const StyledTestimonialDescription = styled.div`
    font-style: italic;
    position: relative;
`;

const StyledQuoteLeftIcon = styled.div`
    position: absolute;
    font-size: 48px;
    top: -10px;
    left: 0;
    opacity: 0.1;
`;

const StyledQuoteRightIcon = styled.div`
    position: absolute;
    font-size: 48px;
    bottom: -10px;
    right: 0;
    opacity: 0.1;
`;

// const StyledTestimonials = styled.div`
//     display: flex;
//     margin: 48px 0;

//     ${props =>
//         css`
//             flex-direction: ${props.imagePosition === 'right' ? 'row-reverse' : 'row'}
//     `};

//     @media (max-width: 768px) {
//         flex-direction: column;
//     }
// `;


// @media (min-width: 768px) {
//     ${props =>
//         css`
//             margin-right: ${props.imagePosition === 'left' ? '20px' : ''};
//             margin-left: ${props.imagePosition === 'right' ? '20px' : ''};
//     `};
// }

const Testimonials = ({
    config = []
}) => {
    return (
        <StyledTestimonials>
            {config.map((testimonial, index) => (
                <StyledTestimonial
                    key={`testimonial-${index}`}
                    first={index === 0}
                    last={index === config.length - 1}
                >
                    <h2>
                        {testimonial.person}
                    </h2>
                    <StyledTestimonialDescription>
                        <StyledQuoteLeftIcon className="fas fa-quote-left"></StyledQuoteLeftIcon>
                        {testimonial.description}
                        <StyledQuoteRightIcon className="fas fa-quote-right"></StyledQuoteRightIcon>
                    </StyledTestimonialDescription>
                </StyledTestimonial>
            ))}
        </StyledTestimonials>
    )
};

export default Testimonials;
