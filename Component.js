import './App.css';

const Compon=(prop)=>{
    return (
        <li>
        <section className="section">
            <div className="singleLine">
                <p>{prop.email}</p>
                <p className="name">{prop.name}</p>
            </div>
            
                <p className="Paragraph">{prop.para}</p>
            
        </section>
        </li>
    );
}
export default Compon;