import logo from './logo.svg';
import { Table, TableRow, Form, FormGroup, Input, Container} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Input className="searchbar" type="search" style={{
            paddingLeft: 100,
            paddingRight: 200,
            paddingTop: 30,
            paddingBottom: 30,
            borderRadius: 25,
            }}>
          </Input>
        </Container>
      </header>
    </div>
  );
}

export default App;
