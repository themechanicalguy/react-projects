import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store/slices/carsSlice";

const CarList = () => {
  const disptach = useDispatch();
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCarDelete = (car) => {
    disptach(removeCar(car.id));
  };

  const rendredCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {rendredCars} <hr />
    </div>
  );
};

export default CarList;
