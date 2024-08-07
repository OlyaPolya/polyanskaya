'use client'
import { ErrorBoundaryProps, ErrorBoundaryState } from '@/app/_constants/types'
import React from 'react'

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
   constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {

    return { hasError: true }
  }
  componentDidCatch(error: Error, errorInfo: any) {
    console.error({ error, errorInfo })
  }
  render() {
    if (this.state.hasError) {
      this.props.fallback
    }

    return this.props.children
  }
}

export default ErrorBoundary;
