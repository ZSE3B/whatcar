import { useState } from 'react';
import InformBlock from './InformBlock';

export default function ComparisonBlock() {
    const maxNrCars = 4;
    const minNrCars = 1;

    // Initialize state with plain JavaScript objects
    const [cars, setCars] = useState([
        { id: 1 },
        { id: 2 }
    ]);

    function handleAddCar() {
        if (cars.length === maxNrCars) return;
        const existingIds = cars.map(car => car.id);
        let AddId = 1;
        while (existingIds.includes(AddId)) {
            AddId++;
        }

        // Add new car object to the state
        setCars(cars => [...cars, { id: AddId }]);
    }

    function handleRemoveCar(RemoveId) {
        if (cars.length === minNrCars) return;
        // Remove car with the specified id from the state
        setCars(cars => cars.filter(car => car.id !== RemoveId));
    }

return (
    <div className='comparison-block'>
        {cars.map((car) => (
            <div key={car.id} className='one-block'>
                <input type='button' onClick={() => handleRemoveCar(car.id)} value='❌' />
                <InformBlock key={car.id} /> 
                </div>
        ))}
        {cars.length < maxNrCars ? <input type='button' onClick={handleAddCar} value='+' /> : null}
    </div>
);

}
