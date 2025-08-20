// contexts/UserContext.tsx (com flag para ignorar user=null no primeiro evento)
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { auth, db } from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  const firstAuthCheckDone = useRef(false); 

  useEffect(() => {
    const loadStoredUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('userData');
        if (storedUser) {
          setUserData(JSON.parse(storedUser));
        
        }
      } catch (e) {
       
      } finally {
        setInitialLoadComplete(true);
      }
    };

    loadStoredUser();
  }, []);

  useEffect(() => {
    if (!initialLoadComplete) return;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoadingUser(true);
   

      if (!firstAuthCheckDone.current) {
       
        firstAuthCheckDone.current = true;

        if (user) {
          try {
            const docRef = doc(db, 'usuarios', user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
              const fullUserData = { uid: user.uid, ...docSnap.data() };
              setUserData(fullUserData);
              await AsyncStorage.setItem('userData', JSON.stringify(fullUserData));
       
            }
          } catch (error) {
            console.error('Erro ao buscar dados do Firestore:', error);
          }
        } else {
      
       
        }

        setLoadingUser(false);
        return;
      }

      
      if (user) {
        try {
          const docRef = doc(db, 'usuarios', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const fullUserData = { uid: user.uid, ...docSnap.data() };
            setUserData(fullUserData);
            await AsyncStorage.setItem('userData', JSON.stringify(fullUserData));
      
          }
        } catch (error) {
          console.error('Erro ao buscar dados do Firestore:', error);
        }
      } else {
        setUserData(null);
        await AsyncStorage.removeItem('userData');
  
      }

      setLoadingUser(false);
    });

    return () => unsubscribe();
  }, [initialLoadComplete]);

  return (
    <UserContext.Provider value={{ userData, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
