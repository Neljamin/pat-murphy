import React, { Component } from 'react';
import _ from 'lodash';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import './LandingPage.scss';
import { AlmostFullscreen } from '../../widgets';
import contentService from '../../../services/contentService';

const LANDING_PAGE_CONTENT_ID = 'HglmN5Bl5lm5e0vNMzk1z';

export default class LandingPage extends Component {
    state = {};

    constructor(props) {
        super(props);
        this.contentService = contentService;
    }

    componentDidMount() {
        this.contentService.getContent(LANDING_PAGE_CONTENT_ID)
            .then(content => {
                const headerImages  = _.get(content, 'fields.headerImages');
                const headerImage = _.get(headerImages[0], 'fields.file.url');
                this.setState({
                    headerImage,
                    title: _.get(content, 'fields.headerImageTitle'),
                    subtitle: _.get(content, 'fields.headerImageSubtitle')
                });
            });
    }
    
    render() {
        const { headerImage, title, subtitle } = this.state;
        return (
            <AlmostFullscreen
                className="landing-page"
                backgroundImage={headerImage}
            >
                <div className="landing-page__info-panel">
                    <span className="landing-page__main-text">
                        {title}
                    </span>
                    <span className="landing-page__sub-text">
                        {subtitle}
                    </span>
                </div>
            </AlmostFullscreen>
        );
    }
}
