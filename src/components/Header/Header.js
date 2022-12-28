import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation/Navigation';
import logo from '../../images/sirwok_glasses.png';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 40,
    height: 80,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
}));

export const Logo = styled.img(() => ({
    height: 64,
    marginLeft: 8,
}));

const Header = () => {
    return (
        <HeaderContainer>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Logo src={logo} alt="logo" />
            </Link>
            <Navigation />
        </HeaderContainer>
    );
};

export default Header;
