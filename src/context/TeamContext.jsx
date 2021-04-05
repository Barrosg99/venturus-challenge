import React, { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TeamContext = createContext();

export default TeamContext;

export function TeamProvider({ children }) {
  const [team, setTeam] = useLocalStorage('@team-list', {
    id: 1,
    teams: [],
  });

  return (
    <TeamContext.Provider
      value={{ team, setTeam }}
    >
      {children}
    </TeamContext.Provider>
  );
}
