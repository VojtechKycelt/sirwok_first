import React from 'react';
import styled from 'styled-components';
import { TYPEFACE_HEADLINE } from '../../constants/typefaces';
import sirwok from '../../images/godolo_fall.GIF';
import GodoloSus from '../../images/godolo_sus.png';
import { COLOR_TEXT, COLOR_TEXT_HOVER } from '../../constants/colors';
import { PageHeaderDefault } from '../../library/PageHeaderDefault/PageHeaderDefault';
import { GlobalStyle } from '../../library/GlobalStyle/GlobalStyle';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const BackgroundContainer = styled.div(() => ({
    backgroundImage: `url(${sirwok})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    color: COLOR_TEXT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
}));

const AnimatingImageContainer = styled(motion.div)(() => ({
    position:"absolute",
    top:200,
    left:0,
    '& img': {
        height: 100,
    },
}));

export const SectionHeader = styled.div(() => ({
    ...TYPEFACE_HEADLINE,
    color: COLOR_TEXT,
    textDecoration: 'underline',
    margin: '24px 0',
    '&:hover': {
        color: COLOR_TEXT_HOVER,
        textDecoration: 'none',
    },
}));

const ErrorPage = () => {
    return (
        <BackgroundContainer>
            <GlobalStyle />
            <AnimatingImageContainer
                animate={{
                    x:[100,window.innerWidth-100,0],
                    rotate: [0,360,0],
                }}
                transition={{
                    duration: 5,
                    times: [0,1],
                    repeat: Infinity,
                }}
            >
                <img src={GodoloSus} alt="" />
            </AnimatingImageContainer>
            <PageHeaderDefault>Oops, You fell down of the site.</PageHeaderDefault>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <SectionHeader>Climb back up</SectionHeader>
            </Link>
        </BackgroundContainer>
    );
};

export default ErrorPage;
