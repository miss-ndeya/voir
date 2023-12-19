import { useState } from "react";
const Home = () => {
    const [name, setName] = useState("mario")
    const [age, setAge] = useState(25)

    const handleClick = () => {
        setName("Pape")
        setAge(30)
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p style={{marginBottom: '15px', marginTop: '15px'}}> { name } is { age } years old</p>
            <button style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px', 
            marginBottom: '10px'
          }} onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;