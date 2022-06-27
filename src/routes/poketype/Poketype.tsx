import React, { FunctionComponent } from "react";
import usePoketype from "./usePoketype";
import { Link, useParams } from "react-router-dom";
import { IPoketype as ImportedPokeType } from "./usePoketype";
import Pokemon from "../pokemon/Pokemon";

interface SpecificPoketype {
  poketype: ImportedPokeType["poketype"];
}
const Poketype: FunctionComponent<SpecificPoketype> = ({ poketype }) => {
  const { type }: any = useParams();

  const renderPoketypeEach = (): JSX.Element[] => {
    return poketype
      .filter((poketype) => {
        return poketype.name === type;
      })
      .map((poketypes, idx) => {
        return (
          <div key={idx}>
            <h1>{poketypes.name}</h1>
          </div>
        );
      });
  };
  return <div>{renderPoketypeEach()}</div>;
};

export default Poketype;
