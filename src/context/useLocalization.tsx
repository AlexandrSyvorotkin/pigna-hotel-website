import { createContext, useContext, useState, ReactNode } from 'react';

// Создаем контекст
const LocalizationContext = createContext<{ locale: string; setLocale: (locale: string) => void } | undefined>(undefined);

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState('ENG'); // Установите начальную локализацию

  return (
    <LocalizationContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocalizationContext.Provider>
  );
};

// Хук для использования контекста
export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};