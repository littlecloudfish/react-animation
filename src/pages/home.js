import React from 'react';
import {ISlideConfig, PageSlides, SlideParallaxType} from '@re_point/react-page-slides';
import Pictureslide from '../components/pictureslide'
import Productiondemo from '../components/productdemo'

const  MainPage = () => {
    const slides: ISlideConfig[] = [
        {
            content: <div>
                
                <Productiondemo/>
                    </div>,
            // style: {
            //     backgroundImage: 'url("/productphoto/1.jpg")'
            // }
        },
        {
            content: <div>
                        <Pictureslide/>           
                    </div>,
            // style: {
            //     backgroundImage: 'url("public/photo/photo_2.jpg")'
            // }
        },
        {
            content: <div>third page content</div>,
            style: {
                backgroundImage: 'url("public/photo/photo_2.jpg")'
            }
        },
    ];
    return (
        <PageSlides
            enableAutoScroll={true}
            transitionSpeed={1000}
            slides={slides}
            parallax={{
                offset: 0.6,
                type: SlideParallaxType.reveal
            }}
        />
    )
};
export default MainPage