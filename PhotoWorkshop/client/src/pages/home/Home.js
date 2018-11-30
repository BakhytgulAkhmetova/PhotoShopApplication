import React from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';

export const Home = () => {
    return (<div>
        <Header/>
        <Content/>
        <Footer/>
    </div>);
};
