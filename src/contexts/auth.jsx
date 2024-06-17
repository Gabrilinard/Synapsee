import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser.length > 0) setUser(hasUser[0]);
    }
  }, []);

  const login = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser(hasUser[0]);
        return;
      } else {
        return "E-mail ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const registro = (email, password, name, location, especialista, areaEspecializacao, disponibilidade) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || [];

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return "Já tem uma conta com esse E-mail";
    }

    const newUser = { email, password, name, location, especialista, areaEspecializacao, disponibilidade };

    usersStorage.push(newUser);
    localStorage.setItem("users_bd", JSON.stringify(usersStorage));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  const updateUserInfo = (newInfo) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const updatedUsers = usersStorage.map((u) =>
      u.email === user.email ? { ...u, ...newInfo } : u
    );

    localStorage.setItem("users_bd", JSON.stringify(updatedUsers));

    if (newInfo.email) {
      const userToken = JSON.parse(localStorage.getItem("user_token"));
      const updatedUserToken = { ...userToken, email: newInfo.email };
      localStorage.setItem("user_token", JSON.stringify(updatedUserToken));
    }

    setUser((prevUser) => ({ ...prevUser, ...newInfo }));
  };

  const tornarEspecialista = (email) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    if (!usersStorage) {
      console.error("Não foi possível encontrar usuários no localStorage");
      return;
    }

    const updatedUsers = usersStorage.map((user) =>
      user.email === email ? { ...user, especialista: true } : user
    );

    localStorage.setItem("users_bd", JSON.stringify(updatedUsers));

    if (user?.email === email) {
      setUser((prevUser) => ({ ...prevUser, especialista: true }));
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, login, registro, signout, updateUserInfo, tornarEspecialista }}
    >
      {children}
    </AuthContext.Provider>
  );
};
