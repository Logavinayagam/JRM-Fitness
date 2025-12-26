import { Helmet } from "react-helmet-async";
import Membership from "./Membership";
import HeroImage from '../assets/images/jrmbackground.png';
import Programs from "./Programs";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <Helmet>
            <title>JRM Fitness - Vellore</title>
            <meta name="description" content="Welcome to JRM Fitness, your ultimate destination for achieving your fitness goals." />
            <meta name="keywords" content="Fitness, Gym, Health, Workout, Training, JRM Fitness, Vellore" />
            <meta name="author" content="JRM Fitness" />
            <meta name="copyright" content="Logavinayagam" />
        </Helmet>
        
        <div className="hero-container">
            <img src={HeroImage} alt="JRM Fitness Gym" className="hero-image" />
            
            <div className="hero-text">
                <h1>JRM Fitness</h1>
                <p>Transform your body and mind with us.</p>
            </div>
            
            <div className="hero-buttons">
                <a href="#plans" className="hero-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    View Plan
                </a>
                <a href="#form" className="hero-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    Free Trial
                </a>
                <a href="#contact" className="hero-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Contact
                </a>
            </div>
        </div>
        
        <div className="container">
            
        </div>
        </>
    );
}

export default Home;