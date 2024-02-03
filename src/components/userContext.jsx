import React from "react"

const UserContext=React.createContext();

const UserProvider=UserContext.Provider;

const UserConsumer=UserContext.Consumer;

console.log(UserContext);

export{UserProvider,UserConsumer};
