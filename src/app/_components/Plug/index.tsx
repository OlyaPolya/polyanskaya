'use client'
import { useEffect } from 'react';
import { useState } from 'react';

type PlugProps = {
  fallback: JSX.Element;
  children: JSX.Element
}

export type PlugState  = {
  isLoading: boolean;
}

function Plug({ fallback, children }: PlugProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  })

  if (isLoading) {
    return fallback
  }

  return children;

}

export default Plug;
