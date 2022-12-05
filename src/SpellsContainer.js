import React, { useEffect, useState } from "react";
import SpellsList from "./SpellsList";
import Search from "./Search";
// import AddSpell from "./AddSpell"

function SpellsContainer () {

    const [spells, setSpells] = useState ([]);
    const [searchSpell, setSearchSpell] = useState("");

    useEffect (() => {
        fetch("http://localhost:3000/spells")
        .then ((resp) => resp.json())
        .then ((spells) => (
            setSpells(spells)
            )
    )}, []);

    const displaySpell = spells.filter((spells) => {
        return spells.name.toLowerCase().includes(searchSpell.toLowerCase());
    })

    // function handleNewSpell (newSpell) {
    //     const updatedSpells=[...spells, newSpell];
    //     setSpells(updatedSpells)
    // }

    // function handleUpdateSpell (updateSpell) {
    //     const updatedSpells= spells.map((spell) => {
    //         if (spell.mame === updateSpell.name) {
    //             return updateSpell
    //         } else {
    //             return spell;
    //         }
    //     })
    //     setSpells(updatedSpells)
    // }

return (
    <div className="container">
    {/* <AddSpell  onAddSpell={handleNewSpell}/> */}
    <Search 
    searchSpell={searchSpell} onSearchChange={setSearchSpell}
    />
    <SpellsList 
    spells={displaySpell}
    // onUpdateSpell={handleUpdateSpell}
    />
    </div>
)
}

export default SpellsContainer;