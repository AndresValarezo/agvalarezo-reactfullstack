
import { Typography,Container,styled } from '@mui/material';

const Title4= styled(Typography)`
    text-align: center;
`;
const ContainerS = styled(Container)`
    margin-top: 5%;

`;

function CodeForInterview () {
    return (
        <ContainerS>
            <Title4 variant="h5"> REST API CLIENT SERVER </Title4>
        </ContainerS>
    );

}

export default CodeForInterview;