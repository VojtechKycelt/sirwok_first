import React from 'react';
import { GlobalStyle } from '../../library/GlobalStyle/GlobalStyle';
import { PageHeaderDefault } from '../../library/PageHeaderDefault/PageHeaderDefault';
import { PageContainerDefault } from '../../library/PageContainerDefault/PageContainerDefault';
import Header from '../../components/Header/Header';
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactPage = () => {
    return (
        <PageContainerDefault>
            <GlobalStyle />
            <Header />
            <PageHeaderDefault>Contact</PageHeaderDefault>
            <ContactForm/>
        </PageContainerDefault>
    );
};

export default ContactPage;
