//home.jsx, Dani Baker, 301070844, September 26th 2024
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span><br/>
          <span className="introText">I am <span className="introName">Danielle Baker</span> 
          <br/>Website Designer</span>
          <p className="introPara">I am a student at centennial college working on web development projects.</p>
          <Link to='/contact'><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px"/></button></Link>
          </div>
          
     </section>
    

     </>
     }
    