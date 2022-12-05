import React from "react";
import Spells from "./Spells"

function SpellsList ({ spells }) {

   

    return (
            <ul >
                {React.Children.toArray(
                spells.map((spell) => {
                    return <Spells
                    name={spell.name}
                    description={spell.description}
                    />
                }))}
            </ul>
    )
}

export default SpellsList;