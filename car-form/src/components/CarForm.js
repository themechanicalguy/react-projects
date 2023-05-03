import { useDispatch, useSelector } from "react-redux";
import { addCar } from "../store/slices/carsSlice";
import { changeName, changeCost } from "../store/slices/formSlice";

const CarForm = () => {
  const disptach = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    disptach(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const carCost = +event.target.value || 0;
    disptach(changeCost(carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, cost);

    disptach(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
