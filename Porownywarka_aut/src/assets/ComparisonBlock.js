import { useState } from 'react';
import InformBlock from './InformBlock';

export default function ComparisonBlock() {
    const maxNrCars = 4;
    const minNrCars = 1;


    const [cars, setCars] = useState([{ id: 1, component: <InformBlock key={1} /> }, { id: 2, component: <InformBlock key={2} /> }]);

    function handleAddCar() {
        if (cars.length === maxNrCars) return;
        const existingIds = cars.map(car => car.id);
        let AddId = 1;
        while (existingIds.includes(AddId)) {
            AddId++;
        }

        setCars(cars => [...cars, { id: AddId, component: <InformBlock key={AddId} /> }]);
    }

    function handleRemoveCar(RemoveId) {
        if (cars.length === minNrCars) return;
        setCars(cars => cars.filter(car => car.id !== RemoveId));
    }

    return (
        <div>
            {cars.map((car) => (
                <div key={car.id}>
                    <input type='button' onClick={() => handleRemoveCar(car.id)} value='-' />
                    {car.component}
                </div>
            ))}
            {cars.length < maxNrCars ? <input type='button' onClick={handleAddCar} value='+' /> : null}
        </div>
    );
}