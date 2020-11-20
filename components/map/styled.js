import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../layout';
import { HoursContainer as Hours} from '../footer/styled';

export const HoursContainer = styled(Hours)`
    @media (min-width: 850px) {
        width: 50%;
        
    } ;

`