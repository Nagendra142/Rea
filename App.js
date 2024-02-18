import Compon from './Component';
import './App.css';
import {data} from './data.js';
const App=()=>{
    return <section className="whole">{
        data.map(child=>{
            return <Compon email={child.email} name={child.name} para={child.body}/>
        })
    }
        
    </section>
}
export default App;