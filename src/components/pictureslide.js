import '../styles/my-sass.scss'


window.addEventListener('load', (event) => {
    var
    carousel = document.querySelector('.carousel'),
    figure = carousel.querySelector('figure'),
    nav = carousel.querySelector('nav'),
    numImages = figure.childElementCount,
    theta =  2 * Math.PI / numImages,
    currImage = 0
;
nav.addEventListener('click', onClick, true);

function onClick(e) {
    e.stopPropagation();
    
    var t = e.target;
    if (t.tagName.toUpperCase() !== 'BUTTON')
    return;
    
    if (t.classList.contains('next')) {
    currImage++;
    }
    else {
    currImage--;
    }
    
    figure.style.transform = `rotateY(${currImage * -theta}rad)`;
}
  });



const Contact = () =>{


    return (
        <>
            <div className="carousel">
                <figure>
                    <img src="productphoto/1.jpg" alt=""/>
                    <img src="productphoto/2.jpg" alt=""/>
                    <img src="productphoto/3.jpg" alt=""/>
                    <img src="productphoto/4.jpg" alt=""/>
                    <img src="productphoto/5.jpg" alt=""/>
                    <img src="productphoto/6.jpg" alt=""/>
                    <img src="productphoto/7.jpg" alt=""/>
                    <img src="productphoto/8.jpg" alt=""/>
                </figure>
                <nav>
                    <button className="nav prev">Prev</button>
                    <button className="nav next">Next</button>
                </nav>
            </div>
        </>

    )

}

export default Contact;