import { createContext, useState } from "react";
export const AuthContext = createContext();
function Authentication({ children }) {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
  );
}
export default Authentication;
