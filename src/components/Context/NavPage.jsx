import React, { useState, useEffect } from "react";

import { fetchInfo } from "../../API/users";
import { Nav } from "../../pages/client/Home";

const UsersContext = React.createContext();

function NavPage() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchInfo()
      .then((data) => {
        setInfo([data]);
      })
      .catch((err) => {
        console.log(`%c ${err}`, "color: red");
      });
  }, []);

  return (
    <UsersContext.Provider value={info}>
      <Nav />
    </UsersContext.Provider>
  );
}

export { NavPage, UsersContext };
