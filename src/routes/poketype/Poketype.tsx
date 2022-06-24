import React, { FunctionComponent } from "react";
import usePoketype from "./usePoketype";
import { Link, useParams } from "react-router-dom";
import { IPoketype as ImportedPokeType } from "./usePoketype";
const Poketype: FunctionComponent = () => {
  const { type } = useParams();
  const { poketype } = usePoketype();
  const renderPoketype = (): JSX.Element[] => {
    return poketype.map((poketype, index) => {
      return (
        <React.Fragment key={index}>
          <Link to={`/${poketype.name}`}>
            <button>{poketype.name} </button>
          </Link>
        </React.Fragment>
      );
    });
  };

  const renderPoketypeDiv = () => {
    let individualType = poketype.find((poketype) => poketype.name === type);
    return <h1>{individualType?.name}</h1>;
  };
  return (
    <div>
      {renderPoketype()} {renderPoketypeDiv()}
    </div>
  );
};

export default Poketype;
