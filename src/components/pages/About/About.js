import React from 'react'

import './About.scss';
import {
    AlmostFullscreen,
    ImageWithDescription,
    Container,
    Testimonials,
    Heading
} from '../../widgets';

const fakeText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra, ante id rutrum malesuada, ex ipsum ultricies dui, eget viverra libero purus a eros. Sed nec fringilla dolor, non tincidunt ligula. Nullam a turpis a dui vulputate viverra. Suspendisse vel porttitor neque. Praesent eget ipsum eget risus pretium condimentum sed ut tortor. Vestibulum sed ipsum et nunc feugiat porttitor. In hac habitasse platea dictumst. Nulla sit amet lectus egestas, volutpat tellus eu, viverra neque. Aliquam faucibus ultrices lorem at aliquet. Nam tempor diam et quam mattis pharetra. Vestibulum id dignissim odio.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra, ante id rutrum malesuada, ex ipsum ultricies dui, eget viverra libero purus a eros. Sed nec fringilla dolor, non tincidunt ligula. Nullam a turpis a dui vulputate viverra. Suspendisse vel porttitor neque. Praesent eget ipsum eget risus pretium condimentum sed ut tortor. Vestibulum sed ipsum et nunc feugiat porttitor. In hac habitasse platea dictumst. Nulla sit amet lectus egestas, volutpat tellus eu, viverra neque. Aliquam faucibus ultrices lorem at aliquet. Nam tempor diam et quam mattis pharetra. Vestibulum id dignissim odio.
`;

const testimonialConfig = [
    {
        person: 'Denis Blab',
        description: 'Suspendisse vel porttitor neque. Praesent eget ipsum eget risus pretium condimentum sed ut tortor. Vestibulum sed ipsum et nunc feugiat porttitor. In hac habitasse platea dictumst. Nulla sit amet lectus egestas, volutpat tellus eu, viverra neque. Aliquam faucibus ultrices lorem at aliquet. Nam tempor diam et quam mattis pharetra. Vestibulum id dignissim odio.'
    },
    {
        person: 'Laura Godfrey',
        description: 'Suspendisse vel porttitor neque. Praesent eget ipsum eget risus pretium condimentum sed ut tortor. Vestibulum sed ipsum et nunc feugiat porttitor. In hac habitasse platea dictumst. Nulla sit amet lectus egestas, volutpat tellus eu, viverra neque. Aliquam faucibus ultrices lorem at aliquet. Nam tempor diam et quam mattis pharetra. Vestibulum id dignissim odio.'
    },
    {
        person: 'Anro Minstell',
        description: 'Suspendisse vel porttitor neque. Praesent eget ipsum eget risus pretium condimentum sed ut tortor. Vestibulum sed ipsum et nunc feugiat porttitor. In hac habitasse platea dictumst. Nulla sit amet lectus egestas, volutpat tellus eu, viverra neque. Aliquam faucibus ultrices lorem at aliquet. Nam tempor diam et quam mattis pharetra. Vestibulum id dignissim odio.'
    }
];

const LandingPage = () => {
    return (
        <AlmostFullscreen
            className="about"
            backgroundColor='white'
        >
            <Container>
                <Heading>
                    About
                </Heading>
                <ImageWithDescription
                    text={fakeText}
                    imageSrc="/assets/images/headshot.jpg"
                />
                <ImageWithDescription
                    text={fakeText}
                    imageSrc="/assets/images/well.jpeg"
                    imagePosition="right"
                />
                <Heading>
                    Testimonials
                </Heading>
                <Testimonials
                    config={testimonialConfig}
                />
            </Container>
        </AlmostFullscreen>
    )
}

export default LandingPage;
