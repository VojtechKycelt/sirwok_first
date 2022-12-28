import React from 'react';
import styled from 'styled-components';
import CholdaGlasses from '../../../images/cholda_glasses.png';
import KronaGlasses from '../../../images/krona_glasses.png';
import MachyGlasses from '../../../images/machy_glasses.png';
import GodoloSus from '../../../images/godolo_sus.png';
import NavigationItem from './NavigationItem';

const NavigationContainer = styled.div(() => ({
    display: 'flex',
    gap: 20,
}));

const Navigation = () => {
    return (
        <NavigationContainer>
            <NavigationItem img={MachyGlasses} to={'/'} />
            <NavigationItem img={KronaGlasses} to={'/'} />
            <NavigationItem img={CholdaGlasses} to={'/contact'} />
            <NavigationItem img={GodoloSus} to={'*'} cursor={'grab'} />
        </NavigationContainer>
    );
};

export default Navigation;
