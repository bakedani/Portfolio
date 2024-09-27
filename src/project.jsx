//project.jsx, Dani Baker, 301070844, September 26th 2024
import project1 from '../src/assets/project1.png';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'
export default function Project() {
     return <>
     
     <section id="works">
     <h2 className="worksTitle">My Projects</h2>
          <span className="worksDesc">I Have experience working both in class and personal, below are some projects </span> 
          <br></br><br></br>
          <p>Here is a simple fan game bug catcher I made, It is a bug catcher game themed after my favourite franchise Digimon</p>
          <div className="worksImgs">
               
          <img 
                         src={project1}
                        alt="Digimon fan game" 
                        className='images' 
                    />
               </div>

          <button className="workBtn">See More</button>
                  
                  
     </section>
    

     </>
    }
    