import React from 'react';
import Head from './files/Head';
import Process from './files/Process';
import Services from './files/Services';
import Casestudies from './files/Casestudies';
import Prices from './files/Prices';
import Letstalk from './files/Letstalk';
import Faq from './files/Faq';
import Progressbar from './files/Progressbar';
import Works from './files/Works';
import OdometerAnimation from '../../General/Ordometer';
import Header from '../../Header/Header';
import Blog from './files/Blog';


export default function Home(props) {
    const ishvr = props.isHovered;
    const sishvr = props.setIsHovered;

    return (
        <>
            <Header />
            <main className='home'>
                <OdometerAnimation />
                <Progressbar />
                <Head />
                <Process />
                <Works />
                <Services />
                <Casestudies ishvr={ishvr} sishvr={sishvr} />
                <Prices />
                <Letstalk ishvr={ishvr} sishvr={sishvr} />
                <Faq />
                <Blog />
            </main>
        </>
    );
}