import './App.css';
import axios from 'axios';
import { useState , useEffect} from 'react';
function App() {
  const [fetchPokemon, setFetchPokemon] = useState([])
  const [axiosPokemon, setAxiosPokemon] = useState([])
  

  // - fetch Vanilla JS
  const fetchPokemonn = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807").
      then(response => response.json()).
      then(response => {
        setFetchPokemon(response.results)
        console.log(response[0])
      }).
      catch(error => console.log(error))
  }

  const axiosSuperHeros = ()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response=> {
      setAxiosPokemon(response.data.results)
      console.log(response.data)
    }).catch(error=>console.log(error))
  }

  
  
  return (
    <div className="App">
      <h1>pokemon</h1>
      <button onClick={fetchPokemonn}>fetch pokemon</button>
      <button onClick={axiosSuperHeros}>axios pokemon</button>
      
      {/* <p>{JSON.stringify(fetchSuperHerosArray)}</p> */}
      
      <table>
        <thead>
          {/* <tr>
            <th>Image</th>
            <th>Hero Name</th>
            <th>Full Name</th>
            <th>Publisher</th>
          </tr> */}
        </thead>
        <tbody>
          {
            fetchPokemon.map(hero => {
              return (
                <tr>
                  <td>{hero.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <table style={{backgroundColor:'silver'}}>
        
        <tbody>
          {
            axiosPokemon.map(hero => {
              return (
                <tr key={hero.id}>
                  
                  <td>{hero.name}</td>
                  
                </tr>
              )
            })
          }
        </tbody>
      </table>
      
      
      
      

    </div>
  );
}

export default App;
