import '../css/header.css';
import CV from '../../assets/cv/ianmooreen-cv.pdf';
import Banner from './Banner';

function Header(){
    return(
        <>
            <div className="header">
                <div className='wrapper'>
                    <div id="contact-info">
                        <a href='callto:09774875549'><span>Call me at:</span> 09774875549</a>
                    </div>
                    <div id="email-info">
                        <a href='mailto:deguzmanianmooreen@gmail.com'><span>Email me at:</span> deguzmanianmooreen@gmail.com</a>
                    </div>
                    <div id='download-cv'>
                        <a href={CV} target="_blank" rel="noreferrer" class="buttons">DOWNLOAD CV</a>
                    </div>
                </div>
            </div>
            <Banner />
        </>
    );
}

export default Header;