import { useDispatch, useSelector } from 'react-redux';  // ahook that gives us access to state
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
    const dispatch = useDispatch();
    const {name, cost} = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
            };
        }); // pass  aselector fucniton

    
 
    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    };

    function handleCostChange (event) {
        dispatch(changeCost(parseInt(event.target.value) || 0))  // to avoid NaN   - document
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({name, cost}));
        // not nice to have two dispatches
        // dispatch(changeName(''));
        // dispatch(changeCost(0));
    }

    return (
        <div>
            <h4>Add Car</h4>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>Car Name </label>
                    <input 
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <label>Cost </label>
                    <input
                        value={cost || ''}  // ||0   not sure why document
                        onChange={handleCostChange}
                        type="number"
                    />
                </div>
                <div>
                    <button>
                        Add
                    </button>
                </div>
            </form>
        </div>
// there is additional encapsulating div
    );
}

export default CarForm;