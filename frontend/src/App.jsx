import React, { createContext, useEffect, useState } from "react";
import LeftComp from "./components/Leftside/LeftComp";
import RightComp from "./components/Rightside/RightComp";
import { BaseURL } from "../utils/baseURL";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContact } from "../utils/useContact";



export const contactContext = createContext();

const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <contactContext.Provider value={{contacts, setContacts}}>
      <div className="w-full px-12 pt-1 pb-1  mx-auto flex flex-row bg-blue-300  h-screen gap-10">
        <LeftComp />
        <RightComp />
      </div>
    </contactContext.Provider>
  );
};

export default App;
