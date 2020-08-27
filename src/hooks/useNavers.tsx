import React, { createContext, useState, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { INaver, show, index, remove } from '../services/api';
import { useModal } from './useModal';
import formatNaverInputData from '../utils/formatNaverInputData';
import { IFormValues } from '../components/NaverForm';

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
  hasNavers: boolean;
  fetchNaversDataForFields: (id: string) => Promise<void>;
  formValues: IFormValues;
  clearForm: () => void;
}

const NaversContext = createContext({} as INaversContext);

const initialFormValues = {
  name: '',
  jobRole: '',
  birthdate: '',
  admissionDate: '',
  project: '',
  url: '',
};

const NaversContextProvider: React.FC = ({ children }) => {
  const [navers, setNavers] = useState<INaver[]>([]);
  const [hasNavers, setHasNavers] = useState(true);
  const [selectedNaver, setSelectedNaver] = useState<INaver>({} as INaver);
  const [selectedNaverId, setSelectedNaverId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);

  const history = useHistory();

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
      if (!response.data.length) {
        setHasNavers(false);
        return;
      }
      setNavers(response.data);
    } catch (error) {
      setHasNavers(false);
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

  const fetchNaversDataForFields = useCallback(
    async (id: string) => {
      try {
        setIsLoading(true);
        const response = await show(id);
        setFormValues(formatNaverInputData(response.data));
      } catch (error) {
        history.push('/');
      } finally {
        setIsLoading(false);
      }
    },
    [history],
  );

  const clearForm = useCallback(() => {
    setFormValues(initialFormValues);
  }, []);

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
        hasNavers,
        fetchNaversDataForFields,
        formValues,
        clearForm,
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
