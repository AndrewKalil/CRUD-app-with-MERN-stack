import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [rentalData, setRentalData] = useState([]);
  const [page, setPage] = useState(
    Number(window.localStorage.getItem("page")) || 0
  );

  const pageForward = () => {
    rentalData.length >= 15 && setPage(Number(page) + 1);
    window.localStorage.setItem("page", Number(page));
  };

  const pageBackward = () => {
    page > 0 && setPage(Number(page) - 1);
    window.localStorage.setItem("page", Number(page));
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/data/rental-data?page=${page}&limit=${
          page > 1 ? 15 : 0
        }`
      )
      .then((data) => {
        setRentalData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    window.localStorage.setItem("page", Number(page));
  }, [page]);

  return (
    <AppContext.Provider
      value={{
        rentalData,
        setRentalData,
        pageBackward,
        pageForward,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppContextProvider };
