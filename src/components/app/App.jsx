import { employees } from "../../utils/employees";
import EmployeeCard from "../employeeCard/EmployeeCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      Hello World!
      <EmployeeCard data={employees} />
    </div>
  );
}

export default App;
