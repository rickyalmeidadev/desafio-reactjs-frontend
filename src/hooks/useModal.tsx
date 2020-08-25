import React, { createContext, useState, useCallback, useContext } from 'react';

interface IModalContext {
  naverToggle: boolean;
  handleNaverToggle: () => void;
}

const ModalContext = createContext({} as IModalContext);

const ModalContextProvider: React.FC = ({ children }) => {
  const [naverToggle, setNaverToggle] = useState(true);

  const handleNaverToggle = useCallback(() => {
    setNaverToggle(prevState => !prevState);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        naverToggle,
        handleNaverToggle,
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
