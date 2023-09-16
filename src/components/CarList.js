import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const dispatch = useDispatch();
    
    const cars = useSelector(({cars: {data, searchTerm}}) => {
        return data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    });
        
  
    function handleDeleteCar(car) {
        dispatch(removeCar(car.id));
    }

    const renderedCars = cars.map(car => {
        return (
            <div key={car.id}>
                 <p>{car.name}  -  ${car.cost}</p>
                 <button onClick={()=>handleDeleteCar(car)}>XXX</button> 
            </div>
        );}
    )// notice how we use a callback function
       
    return (
        <div>
            {renderedCars}
            <hr />
        </div>
    );
}

export default CarList;