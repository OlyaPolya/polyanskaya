
'use client'
import { createContext } from 'react';
import { appContent } from '../_constants/content';
import { AppContentProps } from '../_constants/types';

export const AppContext = createContext<AppContentProps>({
  pages: {
    main: {
      path: '',
      title: '',
    }
  },
  about:  {
    title: '',
  },
  jobs:{
    title: '',
    description: [],
  },
  skills: {
    title: '',
    description: [],
    stack: {},
  },
  courses: {
    title: '',
  },
  contacts: {
    title: '',
    stack: {},
  },
  portfolio: {
    title: '',
    stack: {},
  },
});

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={appContent}>
      {children}
    </AppContext.Provider>
  );
}
