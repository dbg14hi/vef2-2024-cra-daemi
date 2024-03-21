import { useState } from "react";
import { useNavigate } from "react-router-dom";

export type Team = {
  id: number;
  name: string;
  description?: string;
}

export function CreateTeam() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Send a request to create the team
    const response = await fetch("http://localhost:4000/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });

    if (response.ok) {
      navigate("/teams");
    } else {
      console.error("Failed to create team");
    }
  };

  return (
    <div>
      <h2>Create New Team</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={description} onChange={handleDescriptionChange} />
        </div>
        <button type="submit">Create Team</button>
      </form>
    </div>
  );
}
