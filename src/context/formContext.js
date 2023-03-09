import React, { createContext, useContext, useState } from 'react';

export const AppFormContext = createContext();

export function FormProvider({ children }) {
  const value = useState({});

  return <AppFormContext.Provider value={value}>{children}</AppFormContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppFormContext);
  if (!context) {
    throw new Error('useAppState must be used within the AppProvider');
  }
  return context;
}
