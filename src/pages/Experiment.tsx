import { Container } from "../components/Container/Container";
import { Person } from "../components/person/Person";
import { Link } from "react-router-dom";

export function Experiment() {
  return (
    <div>
      <h2>Experiment</h2>

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
        </Container>
      </Container>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}