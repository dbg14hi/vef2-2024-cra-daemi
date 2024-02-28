import './App.css';
import { Person } from './components/person/Person';
import { Container } from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <p>app</p>
      <Container>
        <Container>
          <Person name="Óli" favoriteColor="#ff00ff" age={40.2} />
          <Person name="Foo" age={100} />
          <Person name="Bar" favoriteColor="#000000" />
          <Person name="Jóna" favoriteColor="#ff04329" />
          <Person name="Bar" favoriteColor="#000000" />
        </Container>

        <Container>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
          <div>asdf</div>
        </Container>
      </Container>
    </div>
  );
}

export default App;
