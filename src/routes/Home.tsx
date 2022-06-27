import React, { useState } from "react";
import Poketype from "./poketype/Poketype";
import usePoketype from "./poketype/usePoketype";
import { Link } from "react-router-dom";
const Home = () => {
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
  return <div>{renderPoketype()}</div>;
};

export default Home;
