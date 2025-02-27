import { createContext, useContext, useState, ReactNode } from 'react';
import { Team, User } from '../types';

interface TeamContextType {
  teams: Team[];
  addTeam: (team: Omit<Team, 'id' | 'users'>) => void;
  addUser: (user: Omit<User, 'id'>) => void;
  removeUser: (userId: string) => void;
  removeTeam: (teamId: string) => void;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export function TeamProvider({ children }: { children: ReactNode }) {
  const [teams, setTeams] = useState<Team[]>([]);

  const addTeam = (team: Omit<Team, 'id' | 'users'>) => {
    const newTeam: Team = {
      ...team,
      id: crypto.randomUUID(),
      users: [],
    };
    setTeams([...teams, newTeam]);
  };

  const addUser = (user: Omit<User, 'id'>) => {
    const newUser: User = {
      ...user,
      id: crypto.randomUUID(),
    };
    setTeams(teams.map(team => 
      team.id === user.teamId 
        ? { ...team, users: [...team.users, newUser] }
        : team
    ));
  };

  const removeUser = (userId: string) => {
    setTeams(teams.map(team => ({
      ...team,
      users: team.users.filter(user => user.id !== userId)
    })));
  };

  const removeTeam = (teamId: string) => {
    setTeams(teams.filter(team => team.id !== teamId));
  };

  return (
    <TeamContext.Provider value={{ teams, addTeam, addUser, removeUser, removeTeam }}>
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  const context = useContext(TeamContext);
  if (context === undefined) {
    throw new Error('useTeam bir TeamProvider içinde kullanılmalıdır');
  }
  return context;
} 