import { useState } from "react";
import "./EmployeeCard.css";
import { EmpImg } from "../../utils/EmpImg";
import { useGlobalContext } from "../../utils/context/Context";

const EmployeeCard = ({ name, position, reportsTo, id }) => {
  const { employees } = useGlobalContext();
  let [display, setDisplay] = useState(false);
  let childEmployees = employees.filter((item) => item.reportsTo === id);

  const cardClickHandler = () => {
    console.log("card clicked");
    setDisplay(true);
  };

  return (
    <>
      <div className="employee-card" onClick={cardClickHandler}>
        <div className="card-top">
          <div className="card-image">
            <EmpImg name={name?.charAt(0)} />
          </div>
          <div className="card-name">
            <p>{name}</p>
          </div>
        </div>
        <div className="card-bottom">
          <p>{position}</p>
        </div>
        {display && (
          <div>
            {childEmployees.map((employee) => (
              <EmployeeCard {...employee} key={employee.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeCard;
