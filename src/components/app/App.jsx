import EmployeeCard from "../employeeCard/EmployeeCard";
import "./App.css";
import { useGlobalContext } from "../../utils/context/Context";

function App() {
  const { filteredEmployees } = useGlobalContext();
  return (
    <div className="App">
      {filteredEmployees.map((employee) => (
        <EmployeeCard {...employee} key={employee.id} />
      ))}
    </div>
  );
}

export default App;
