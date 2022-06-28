import React, { useState, useEffect } from "react";
import axios from "axios";

export interface IPoketype {
  poketype: {
    name: string;
  }[];
}

const usePoketype = () => {
  const [poketype, setPoketype] = useState<IPoketype["poketype"]>([]);

  const getPoketypes = async (): Promise<void> => {
    await axios.get(`https://pokeapi.co/api/v2/type`).then((res) => {
      setPoketype(res.data.results);
    });
  };

  useEffect(() => {
    getPoketypes();
  }, []);

  return { poketype, setPoketype };
};

export default usePoketype;
