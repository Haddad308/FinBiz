import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getSession } from "@/lib";

interface User {
  name: string;
  email: string;
}

interface UserContextProps {
  user: User | null;
  fetchUser: () => Promise<void>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    const sessionUser = await getSession();
    setUser(sessionUser);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return <UserContext.Provider value={{ user, fetchUser }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
