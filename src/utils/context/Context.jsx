import { createContext, useContext, useReducer } from "react";
import reducer from "./Reducer";
import { employees } from "../../utils/employees";

const AppContext = createContext();

const initialState = {
  employees: employees,
  filteredEmployees: [employees[0]],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setFilteredEmployees = (filteredEmployees) => {
    dispatch({ type: "SET_FILTERED_EMPLOYEES", filteredEmployees });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setFilteredEmployees,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
