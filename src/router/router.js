import {Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import Register from '../pages/register';
import HeaderBar from '../components/header';
import MainLayout from '../layouts/mainLayout';

const Router = () => (
    <BrowserRouter>
        <HeaderBar className='headerbar'/>
        <MainLayout>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/booking' element={<Register/>}/>
            </Routes>
        </MainLayout>
    </BrowserRouter>
)

export default Router;