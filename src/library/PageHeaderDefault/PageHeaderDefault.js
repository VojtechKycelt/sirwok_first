import styled from 'styled-components';
import { TYPEFACE_PAGE_HEADER } from '../../constants/typefaces';

export const PageHeaderDefault = styled.div(() => ({
    ...TYPEFACE_PAGE_HEADER,
    margin: '100px 0 0 20px',
}));
