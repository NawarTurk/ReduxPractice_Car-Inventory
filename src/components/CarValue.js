import { useSelector } from "react-redux";

function CarValue() {

    const totalCost =  useSelector(({cars: {data, searchTerm}}) => 
         data
        .filter((car) => 
            car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .reduce((acc, car) => acc + car.cost, 0)
    );


    // let totalCost=0;

    // for (let car of filteredCars) {
    //     totalCost += car.cost;
    // }

    // filteredCars.forEach(car => {
    //     value = value + car.cost;
    // });

    return (
        <div>
            Total Cost: ${totalCost}
        </div>        
    )
}

export default CarValue;