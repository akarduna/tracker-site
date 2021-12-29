import {Container} from 'reactstrap';
import './App.css';
import Searchbar from './components/searchbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Searchbar/>
        </Container>
      </header>
    </div>
  );
}

export default App;
