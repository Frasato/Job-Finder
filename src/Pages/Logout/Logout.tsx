import { Container, Icon, TextDisconect } from './Logout.styles';
import icon from '../../Assets/icon.png';

const Logout = () =>{
    return(
        <Container>
            <Icon src={icon}/>
            <TextDisconect>Disconnecting your account</TextDisconect>
        </Container>
    )
}

export default Logout;