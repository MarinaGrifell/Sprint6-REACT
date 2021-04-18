import './App.css';
import Book from './book.js'
import llibres from './dades.json'

function App() {
  return (
    <div className="App">
    {llibres.map((item)=> {
      return (
      
         
      
         <Book title={item.title} author={item.author}></Book>
      
      )
    })}
     
    </div>
  );
}

export default App;
