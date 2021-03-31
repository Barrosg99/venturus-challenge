import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TeamContext = createContext();

export default TeamContext;

export function TeamProvider({ children }) {
  const [team, setTeam] = useLocalStorage('@team-list', []);

  return (
    <TeamContext.Provider
      value={{ team, setTeam }}
    >
      {children}
    </TeamContext.Provider>
  );
}
