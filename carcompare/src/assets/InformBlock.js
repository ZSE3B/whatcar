import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import cars from './cars.json'

export default function InformBlock(props) {

    const [thisCar, setThisCar] = useState({ search: props.search, filler: props.filler });
    const [carProps, setCarProps] = useState([]);


    function handleInputChange(event) {
        if(event.target.value === '') {
            setThisCar({ search: event.target.value, filler: props.filler });
            return;
        }
        let newFiller = 'next car name';
        setThisCar({ search: event.target.value, filler: newFiller });
    }

    function handleSearch() {
        // fetch(cars)
        // .then(response=> response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error fetching data:', error));
        
        setCarProps([{ id: 1, component: 'kierownica', cost: 140 }, { id: 2, component: 'silnik', cost: 50 }]);

        cars.forEach((car) => {
            if(car.name !== thisCar.search) return;

            setCarProps(car.components);
        });
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className='inform-block'>
            <div className="input-container">
                <input
                    type='search'
                    value={thisCar.search}
                    placeholder={thisCar.filler}
                    autoComplete='off'
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
            <FontAwesomeIcon className="searchIcon" onClick={handleSearch} icon={faMagnifyingGlass} />  
            </div>

            {carProps.map((car) => (
                <p key={car.id}>{car.component}: {car.cost}zł</p>
            ))}
        </div>
    );
}

InformBlock.propTypes = {
    search: PropTypes.string,
    filler: PropTypes.string
};

InformBlock.defaultProps = {
    search: "",
    filler: "np. audi a4 2019"
};