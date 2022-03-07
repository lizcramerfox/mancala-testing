import { createContext } from "react"

export const AuthContext = createContext({
  token: '',
  user: '',
  confirmChange: false,
  login: () => {}, 
  logout: () => {},
  games: []
})