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
  isLoading: boolean;
  handleLoading: () => void;
  isLoadingModal: boolean;
  handleDeleteNaver: (id: string) => Promise<void>;
}

const NaversContext = createContext({} as INaversContext);

const NaversContextProvider: React.FC = ({ children }) => {
  const [navers, setNavers] = useState<INaver[]>([]);
  const [selectedNaver, setSelectedNaver] = useState<INaver>({} as INaver);
  const [selectedNaverId, setSelectedNaverId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingModal, setIsLoadingModal] = useState(false);

  const {
    handleNaverToggle,
    handleDeleteToggle,
    handleSuccessToggle,
  } = useModal();

  const handleLoading = useCallback(() => {
    setIsLoading(prevState => !prevState);
  }, []);

  const fetchNavers = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await index();
      setNavers(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setIsLoading(false), 2000);
    }
  }, []);

  const handleSelectNaver = useCallback(
    async (id: string) => {
      try {
        setIsLoadingModal(true);
        handleNaverToggle();
        const response = await show(id);
        setSelectedNaver(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => setIsLoadingModal(false), 2000);
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
        setIsLoading(true);
        await remove(id);
        handleDeleteToggle();
        handleSuccessToggle();

        setNavers(navers.filter(naver => naver.id !== id));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
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
        isLoading,
        handleLoading,
        isLoadingModal,
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
