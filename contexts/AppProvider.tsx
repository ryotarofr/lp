import React from "react";
import EmotionProvider from "./EmotionProvader";



type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = (props: AppProviderProps) => {
  const { children } = props;
  return (
    <EmotionProvider>
      {children}
    </EmotionProvider>
  );
};

export default AppProvider;
