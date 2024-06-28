import React from 'react';
import './App.css';
import theme from '../theme';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to='/home'/>}/>
                    <Route path='/home' element={<Home path='home'/>}/>
                    <Route path='/about' element={<Home path='about'/>}/>
                    <Route path='/contact' element={<Home path='contact'/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App;
