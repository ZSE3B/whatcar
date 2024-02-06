import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function InformBlock(props) {
    const [newCar, setNewCar] = useState({ search: props.search, filler: props.filler });
    const [carProps, setCarProps] = useState([]);

    function handleInputChange(event) {
        let newFiller = 'next car name';
        setNewCar({ search: event.target.value, filler: newFiller });
    }

    function handleSearch() {
        setCarProps([{ id: 1, component: 'kierownica', cost: 140 }, { id: 2, component: 'silnik', cost: 50 }]);
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className='InformBlock'>
            <div>
                <input
                    type='search'
                    onChange={handleInputChange}
                    value={newCar.search}
                    placeholder={newCar.filler}
                    autoComplete='off'
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
    filler: "ex. audi a4 2019"
};
