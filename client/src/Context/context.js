import { createContext } from "react"

export const AuthContext = createContext({
  token: null,
  user: null,
  confirmChange: false,
  showLogin: false,
  showLogout: false,
  showSignUp: false,
  showChangePassword: false,
  login: () => {}, 
  logout: () => {}
})