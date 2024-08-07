
'use client'
import { createContext } from 'react';
import { appContent } from '../_constants/content';
import { AppContentProps } from '../_constants/types';

export const AppContext = createContext<AppContentProps>({
  pages: [
    {
      path: '',
      title: '',
    }
  ],
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
    stack: [
      {
        title: '',
        img: '',
      }
    ],
  },
  courses: {
    title: '',
  },
  contacts: {
    title: '',
    stack: [
      {
        title: '',
        img: '',
        link: ''
      },
    ],
  },
  portfolio: {
    title: '',
    stack: [
      {
        title: '',
        description: '',
        img: '',
        link: '',
        badges: []
      },
    ],
  },
});

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={appContent}>
      {children}
    </AppContext.Provider>
  );
}
