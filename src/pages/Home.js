import { Navbar } from "../components/Navbar";
import { Console } from "../components/Console";
import { Display } from "../components/Display";


export const Home = () => {
  
  return (
    <div className="App">
      <div>
        <Navbar />
        <Console />
      </div>
      <div className="px-10">
        <div className="mt-8">
          <Display />
        
        </div>
      </div>
    </div>
  );
}


