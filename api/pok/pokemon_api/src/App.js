import './App.css';
import { useState , useEffect} from 'react';

function App() {
  const [fetchPokemon, setFetchPokemon] = useState([])
  

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

  

  
  
  return (
    <div className="App">
      <h1>pokemon</h1>
      <button onClick={fetchPokemonn}>fetch pokemon</button>
      
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
      
      
      

    </div>
  );
}

export default App;
