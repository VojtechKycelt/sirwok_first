import styled from 'styled-components';
import { COLOR_BACKGROUND, COLOR_TEXT } from '../../constants/colors';

export const PageContainerDefault = styled.div(() => ({
    background: COLOR_BACKGROUND,
    color: COLOR_TEXT,
    minHeight: '100vh',
    overflowX: 'hidden',
}));
