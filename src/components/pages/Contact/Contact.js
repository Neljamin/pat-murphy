import React from 'react'

import './Contact.scss';
import { Input, Button } from '../../inputs';
import {
    Container,
    Heading
} from '../../widgets';

const LandingPage = () => {
    return (
        <div className="contact">
            <Container>
                <Heading invert>
                    Contact
                </Heading>
                <Input type='text' invert label='First Name' />
                <Input type='text' invert label='Last Name' />
                <Input type='text' invert label='Subject' />
                <Input type='textarea' invert label='Message' />
                {/* <Button>Send Mail</Button> */}
            </Container>
        </div>
    )
}

export default LandingPage;
