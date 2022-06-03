import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import { Analytics } from 'aws-amplify';
import { useEffect } from 'react';

Amplify.configure(awsConfig)

function App() {

  useEffect(() => {
    Analytics.record("Home page visited!");
    Analytics.record({
      name: "UserSignIn",
      attributes: {
        userName: "Ram"
      }
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Jay Shree Ram</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
