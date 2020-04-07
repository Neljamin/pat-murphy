import React, { Component } from 'react';
import _ from 'lodash';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import './About.scss';
import {
    AlmostFullscreen,
    ImageWithDescription,
    Container,
    Testimonials,
    Heading
} from '../../widgets';
import contentService from '../../../services/contentService';

const ABOUT_PAGE_CONTENT_ID = '5jXKX2TZn8gEv3O5bLloTw';

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

export default class AboutPage extends Component {
    state = {
        title: 'About',
        paragraphs: []
    };

    constructor(props) {
        super(props);
        this.contentService = contentService;
    }

    componentDidMount() {
        this.contentService.getContent(ABOUT_PAGE_CONTENT_ID)
            .then(content => {
                const title = _.get(content, 'fields.title');
                const paragraphData = _.get(content, 'fields.paragraphs');
                const paragraphs = paragraphData.map(paragraphDataItem => {
                    const body = documentToHtmlString(paragraphDataItem.fields.body);
                    const image = paragraphDataItem.fields.image.fields.file.url;
                    return {
                        body,
                        image
                    };
                });
                this.setState({
                    title,
                    paragraphs
                });
            });
    }

    render() {
        const { title, paragraphs } = this.state;

        return (
            <AlmostFullscreen
                className="about"
                backgroundColor='white'
            >
                <Container>
                    <Heading>
                        {title}
                    </Heading>
                    {
                        paragraphs.map(({body, image}, index) => (
                            <ImageWithDescription
                                innerHtml={body}
                                imageSrc={image}
                                imagePosition={index % 2 === 0 ? 'left': 'right'}
                            />
                        ))
                    }
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
    
}
