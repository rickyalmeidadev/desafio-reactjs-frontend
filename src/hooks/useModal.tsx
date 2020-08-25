import React, { createContext, useState, useCallback, useContext } from 'react';

interface IModalContext {
  naverToggle: boolean;
  handleNaverToggle: () => void;
  deleteToggle: boolean;
  handleDeleteToggle: () => void;
}

const ModalContext = createContext({} as IModalContext);

const ModalContextProvider: React.FC = ({ children }) => {
  const [naverToggle, setNaverToggle] = useState(false);
  const [deleteToggle, setDeleteToggle] = useState(false);

  const handleNaverToggle = useCallback(() => {
    setNaverToggle(prevState => !prevState);
  }, []);

  const handleDeleteToggle = useCallback(() => {
    setDeleteToggle(prevState => !prevState);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        naverToggle,
        handleNaverToggle,
        deleteToggle,
        handleDeleteToggle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = (): IModalContext => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export { ModalContextProvider, useModal };
