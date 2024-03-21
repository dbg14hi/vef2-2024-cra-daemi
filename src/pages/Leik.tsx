import { useState } from "react";
import { useParams } from "react-router-dom";
import { game as TeamType } from "../types";

// TODO þetta þarf að sækja úr vefþjónustu
const GAME: TeamType = { id: 1, hometeam: 'Dripplar', awayteam: 'Skötfastir', description: 'test description' }

export function Leik() {
  const params = useParams();
  const id = params.id;

  // TODO gera að state
  const description = 'foo';
  const [name, setName] = useState<string>(GAME.hometeam)
  const [awayName, setAwayName] = useState<string>(GAME.awayteam)
  const [errors, setErrors] = useState(null)
  


  const onTeamNameChange = (e: any) => {
    console.log(e.target.value);
    setName(e.target.value)
  }
  const onTeamNameChange2 = (e: any) => {
    console.log(e.target.value);
    setAwayName(e.target.value)
  }

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('submitta', name);

    // Uppfæra team í gegnum API með því að senda gegnum fetch

    const response = await fetch(`http://localhost:4000/teams/${id}`, {
      body: JSON.stringify({
        name,
        description
      }),
      method: 'PATCH'
    })

    if (response.status === 400) {
      // Upp kom villa! birta villuskilaboð
      setErrors(await response.json())
    }
  }

  

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Heimalið:</label>
          <input type="text" onChange={onTeamNameChange} value={name} />
        </div>
        <div>
          <label>Awaylið:</label>
          <input type="text" onChange={onTeamNameChange2} value={awayName} />
        </div>
        <button>Uppfæra!</button>
      </form>
      {errors && (<p>Villur við að uppfæra lið: {JSON.stringify(errors)}</p>)}
      <p>Nýtt heiti á heimaliði verður: {name}</p>
      <p>Nýtt heiti á awayliði verður: {awayName}</p>
    </>
  )
}