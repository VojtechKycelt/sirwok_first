import React from 'react';
import { GlobalStyle } from '../../library/GlobalStyle/GlobalStyle';
import { PageHeaderDefault } from '../../library/PageHeaderDefault/PageHeaderDefault';
import { PageContainerDefault } from '../../library/PageContainerDefault/PageContainerDefault';
import Header from '../../components/Header/Header';

const ContactPage = () => {
    return (
        <PageContainerDefault>
            <GlobalStyle />
            <Header />
            <PageHeaderDefault>Contact</PageHeaderDefault>
        </PageContainerDefault>
    );
};

export default ContactPage;
