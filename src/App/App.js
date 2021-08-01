//Import Components
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';

import {projects} from '../json/projects.json';

const App = () => {
 
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects projects={projects}/>
    </div>
  );
}

export default App;