import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const NavigationItemContainer = styled(motion.div)(() => ({}));

const Logo = styled.img(() => ({
    height: 40,
}));

const NavigationItem = ({ img, to, cursor }) => {
    const [hover, setHover] = useState(false);
    const controls = useAnimation();

    const handleMouseEnter = () => {
        setHover(true);
    };
    const handleMouseLeave = () => {
        setHover(false);
    };

    useEffect(() => {
        if (hover) {
            controls.start({
                scale: 1.3,
                rotateZ: 360,
            });
        } else {
            controls.start({
                scale: 1.0,
                rotateZ: 0,
            });
        }
    }, [hover, controls]);

    return (
        <NavigationItemContainer
            cursor={cursor}
            animate={controls}
            transition={{ type: 'spring', stiffness: 50 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={to} style={{ textDecoration: 'none', cursor: cursor }}>
                <Logo src={img} alt="logo" />
            </Link>
        </NavigationItemContainer>
    );
};

export default NavigationItem;
