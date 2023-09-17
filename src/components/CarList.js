import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const dispatch = useDispatch();
    
    const {cars, name} = useSelector(({form, cars: {data, searchTerm}}) => {
        const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
   
        return {
            cars: filteredCars,
            name: form.name
        }
    });
        
  
    function handleDeleteCar(car) {
        dispatch(removeCar(car.id));
    }

    

    const renderedCars = cars.map(car => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        const textStyle = {fontWeight: bold ? 'bold' : 'normal'};
        return (
            <div key={car.id}>
                 <p style={textStyle}>{car.name}  -  ${car.cost}</p>
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