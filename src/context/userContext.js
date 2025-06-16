import { createContext, useContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "@/components/firebase/config";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const logout = async () => {
  //   try {
  //     await signOut(auth);
  //     setUser(null);
  //   } catch (error) {
  //     console.error("Error logging out:", error);
  //   }
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    const initializeAuth = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
        onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
      } catch (error) {
        console.error("Error setting auth persistence:", error);
      }
    };
    initializeAuth();

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
