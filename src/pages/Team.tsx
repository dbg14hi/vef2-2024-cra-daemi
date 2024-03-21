import { useState } from "react";
import { useParams } from "react-router-dom";
import { Team as TeamType } from "../types";


const TEAM: TeamType = { id: 1, name: 'test', description: 'test description' }

export function Team() {
  const params = useParams();
  const id = params.id;

  // State variables with default values
  const [name, setName] = useState<string>(TEAM.name || ""); 
  const [description, setDescription] = useState<string>(TEAM.description || "");
  const [errors, setErrors] = useState<any>(null);


  const onTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  
  const onTeamDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }

  // Function to handle form submission for updating team
  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    const response = await fetch(`http://localhost:4000/teams/${id}`, {
      body: JSON.stringify({
        name,
        description
      }),
      method: 'PATCH'
    });

    if (response.status === 400) {
      setErrors(await response.json());
    }
  }

  
  const deleteTeam = async () => {
    const response = await fetch(`http://localhost:4000/teams/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log("team deleted")
    } else {
      console.error('Failed to delete team');
    }
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Heiti:</label>
          <input type="text" onChange={onTeamNameChange} value={name} />
        </div>
        <div>
          <label>Lýsing:</label>
          <input type="text" onChange={onTeamDescriptionChange} value={description} />
        </div>
        <button>Uppfæra!</button>
        <button type="button" onClick={deleteTeam}>Eyða liði</button>
      </form>
      {errors && (<p>Villur við að uppfæra lið: {JSON.stringify(errors)}</p>)}
      <p>Nýtt heiti á liði verður: {name}</p>
    </>
  )
}
