import React, { createContext, useState, useCallback, useContext } from 'react';
import { INaver, show, index, remove } from '../services/api';
import { useModal } from './useModal';

interface INaversContext {
  navers: INaver[];
  fetchNavers: () => void;
  selectedNaver: INaver;
  handleSelectNaver: (id: string) => Promise<void>;
  selectedNaverId: string;
  handleSelectNaverId: (id: string) => void;
  handleDeleteNaver: (id: string) => Promise<void>;
}

const NaversContext = createContext({} as INaversContext);

const NaversContextProvider: React.FC = ({ children }) => {
  const [navers, setNavers] = useState<INaver[]>([]);
  const [selectedNaver, setSelectedNaver] = useState<INaver>({} as INaver);
  const [selectedNaverId, setSelectedNaverId] = useState('');

  const {
    handleNaverToggle,
    handleDeleteToggle,
    handleSuccessToggle,
  } = useModal();

  const fetchNavers = useCallback(async () => {
    try {
      const response = await index();
      setNavers(response.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleSelectNaver = useCallback(
    async (id: string) => {
      try {
        handleNaverToggle();
        const response = await show(id);
        setSelectedNaver(response.data);
      } catch (error) {
        console.error(error);
      }
    },
    [handleNaverToggle],
  );

  const handleSelectNaverId = useCallback((id: string) => {
    setSelectedNaverId(id);
  }, []);

  const handleDeleteNaver = useCallback(
    async (id: string) => {
      try {
        await remove(id);
        handleDeleteToggle();
        handleSuccessToggle();

        console.log(id);

        setNavers(navers.filter(naver => naver.id !== id));
      } catch (error) {
        console.error(error);
      }
    },
    [handleDeleteToggle, handleSuccessToggle, navers],
  );

  return (
    <NaversContext.Provider
      value={{
        navers,
        fetchNavers,
        selectedNaver,
        handleSelectNaver,
        selectedNaverId,
        handleSelectNaverId,
        handleDeleteNaver,
      }}
    >
      {children}
    </NaversContext.Provider>
  );
};

const useNavers = (): INaversContext => {
  const context = useContext(NaversContext);

  if (!context) {
    throw new Error('useNavers must be used within an AuthProvider');
  }

  return context;
};

export { NaversContextProvider, useNavers };
