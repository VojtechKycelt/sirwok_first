import React from 'react';
import { PageHeaderDefault } from '../../library/PageHeaderDefault/PageHeaderDefault';
import { PageContainerDefault } from '../../library/PageContainerDefault/PageContainerDefault';
import { GlobalStyle } from '../../library/GlobalStyle/GlobalStyle';
import Header from '../../components/Header/Header';

const HomepagePage = () => {
    return (
        <PageContainerDefault>
            <GlobalStyle />
            <Header />
            <PageHeaderDefault>Home</PageHeaderDefault>
        </PageContainerDefault>
    );
};

export default HomepagePage;
