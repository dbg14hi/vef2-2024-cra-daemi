import { useState } from "react";
import { useParams } from "react-router-dom";
import { Team as TeamType } from "../types";

// TODO þetta þarf að sækja úr vefþjónustu
const TEAM: TeamType = { id: 1, name: 'test', description: 'test description' }

export function Team() {
  const params = useParams();
  const id = params.id;

  // TODO gera að state
  const description = 'foo';
  const [name, setName] = useState<string>(TEAM.name)
  const [errors, setErrors] = useState(null)
  
  const onTeamNameChange = (e: any) => {
    console.log(e.target.value);
    setName(e.target.value)
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
          <label>Heiti:</label>
          <input type="text" onChange={onTeamNameChange} value={name} />
        </div>
        <button>Uppfæra!</button>
      </form>
      {errors && (<p>Villur við að uppfæra lið: {JSON.stringify(errors)}</p>)}
      <p>Nýtt heiti á liði verður: {name}</p>
    </>
  )
}