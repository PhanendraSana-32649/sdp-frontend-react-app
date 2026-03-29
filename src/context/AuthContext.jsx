/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

const detectStoredRole = () => {
  if (sessionStorage.getItem('loggedInAdmin')) return 'admin'
  if (sessionStorage.getItem('loggedInServiceManager')) return 'servicemanager'
  if (sessionStorage.getItem('loggedInCustomer')) return 'customer'
  return null
}

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(detectStoredRole)

  const loginAs = (nextRole) => {
    setRole(nextRole)
  }

  const logout = () => {
    sessionStorage.removeItem('loggedInAdmin')
    sessionStorage.removeItem('loggedInServiceManager')
    sessionStorage.removeItem('loggedInCustomer')
    setRole(null)
  }

  const value = useMemo(() => ({ role, loginAs, logout }), [role])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
