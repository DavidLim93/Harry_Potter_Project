import React, { useState } from "react";
import Spells from "./Spells";

function AddSpell ({ setSpells }) {

    const [name, setName]=useState("");
    const [description, setDescription]=useState("");
    const [id, setId] = useState(1)

    function handleSubmit (e) {
        setId (id + 1)
        e.preventDefault();

        // setId ({id: id + 1})
        //console.log(id)

        const addSpell= {
            "name": name,
            "description": description,
            "id": id
        };

        fetch("http://localhost:3000/spells", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addSpell)})
          .then((resp) => resp.json())
          .then((newSpell) => 
          // console.log(Spells))
          setSpells([...Spells, newSpell]))
        //   console.log(newSpell)
        
          
}

return (
    <div className="addSpell">
        <h2 className="h2">Add New Spell</h2>
        <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form"
          name="name"
          placeholder="Spell name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <input
          type="text"
          className="form"
          name="name"
          placeholder="Spell desciption"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" onSubmit={handleSubmit}>Add Spell</button>
         </form>
    </div>
)

}

export default AddSpell;
