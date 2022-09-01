import logo from './logo.svg';
import './App.css';
// const name="Dolly";
// const x=false;
import Header from "./components/Header";
  
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div className="App">
    //  {/* <h1>H1 Heading</h1> */}
    //  <h1>{name}</h1>
    //  <h2>{55 +6}</h2>
    //   <h1>Hello from React</h1>
    //   <h2>{x ?'Yes':'No'}</h2>
    //   <h2>Hello H2</h2>
      
    // </div>
    <div className="container">
      <Header/>


    </div>
  );
}

export default App;
