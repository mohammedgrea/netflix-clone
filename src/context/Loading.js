import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();
export function useLoadingContext() {
  return useContext(LoadingContext);
}
export default function Loading({ childern }) {
  const [loading, setLoading] = useState(false);
  function loadingState(bool) {
    setLoading(bool);
  }
  const value = { loading, loadingState };
  return (
    <LoadingContext.Provider value={value}>{childern}</LoadingContext.Provider>
  );
}
