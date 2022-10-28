import '../css/banner.css';
import headerLogo from '../../assets/images/header-logo.png';


function Banner() {
    return(
        <div className='banner'>
            <div id='header-logo'>
                <img src={headerLogo} alt="logo" />
            </div>
            <div class="navigation">
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#developer">What I do</a></li>
                    <li><a href="#tech">Tech Stack</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Banner;