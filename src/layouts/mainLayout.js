import {Container} from 'react-bootstrap'

const MainLayout = (props) => {
    return(
        <Container className='mainlayout'>
            {props.children}
        </Container>
    )
}
export default MainLayout;