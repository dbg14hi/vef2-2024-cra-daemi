import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { game } from "../types";


export function Leikir() {
    const [games, setGames] = useState<Array<game>>([{ id: 1, hometeam: 'Dripplar', awayteam: 'Skötfastir'}])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:4000/games');
      
      // Engin localhost:4000/games hjá mer með leikir. 
      
      const gamesJson = await response.json();

      setGames(gamesJson)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h2>Games</h2>
      <p>Here are the games:</p>
      <ul>
        {games.map((game) => {
          return (
            <li key={game.id}><Link to={`/Leik/${game.id}`}>{game.hometeam}-{game.awayteam}</Link></li>
          )
        })}
      </ul>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}