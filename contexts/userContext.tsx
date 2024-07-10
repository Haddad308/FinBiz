/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getSession } from "@/lib";

interface User {
  name: string;
  email: string;
}

interface UserContextProps {
  user: User | null;
  loading: boolean; // Add the 'loading' property
  fetchUser: () => Promise<void>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchUser = async () => {
    console.log("Fetching user...");

    try {
      const sessionUser = await getSession();
      if (sessionUser && JSON.stringify(sessionUser) !== JSON.stringify(user)) {
        setUser(sessionUser);
      }
    } catch (error) {
      console.error("Error fetching user session:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return <UserContext.Provider value={{ user, loading, fetchUser }}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
