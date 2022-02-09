import { createContext } from "react"

export const GameContext = createContext({
  token: null,
  user: null,
})