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
          console.log('🟨 Dados carregados do AsyncStorage:', storedUser);
        }
      } catch (e) {
        console.error('Erro ao carregar dados do usuário do AsyncStorage:', e);
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
      console.log('🟥 Firebase auth state mudou:', user);

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
              console.log('✅ (1ª verificação) Dados atualizados e salvos no AsyncStorage.');
            }
          } catch (error) {
            console.error('Erro ao buscar dados do Firestore:', error);
          }
        } else {
      
          console.log('⚠️ (1ª verificação) Usuário null ignorado, mantendo dados no AsyncStorage.');
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
            console.log('✅ Dados atualizados e salvos no AsyncStorage.');
          }
        } catch (error) {
          console.error('Erro ao buscar dados do Firestore:', error);
        }
      } else {
        setUserData(null);
        await AsyncStorage.removeItem('userData');
        console.log('🚫 Usuário deslogado. Dados removidos do AsyncStorage.');
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
