//about.jsx, Dani Baker, 301070844, September 26th 2024
import BBG from '../src/assets/BBG.jfif';
import ux from '../src/assets/ux.png';
import web from '../src/assets/web.png';
import app from '../src/assets/app.png';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     
     <section id="skill">
         
          <span className="skillTitle">What I do</span>
          <span className="skillDesc">I have personally worked doing web design and teaching myself it for years, Hoping to make more projects and work in a professional capacity.</span> 
          
          <div className="skillBar">
               <img src={web} alt="WebDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Web Design</h2>
               <p>I have a lot of prior experience with my previous classes and in my personal life.</p>
               </div>

          </div>
          
                  
     </section>
    

     </>
    }
    