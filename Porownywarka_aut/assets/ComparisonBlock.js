import { useState } from 'react';
import InformBlock from './InformBlock';

export default function ComparisonBlock() {

    const [cars, setCars] = useState(['', '']);

    function handleAddCar() {
        setCars(c => [...c, '']);
    }

    function handleRemoveCar(index) {
        const updatedCars = cars.filter((_,i) => i === index);
        setCars(updatedCars);
    }

    return (<div>
                {cars.map((car, index) => (<>
                        <input type='button' onClick={() => handleRemoveCar(index)} value='-' />
                        <InformBlock search={car}/></>) )}

                <input type='button' onClick={handleAddCar} value='+' />
           </div>)
}
