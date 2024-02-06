import { useState } from 'react';
import PropTypes from 'prop-types';


export default function InformBlock(props) {

    const [newCar, setNewCar] = useState(props.search);

    function handleInputChange(event) {
        setNewCar(event.target.value);
    }

    return (<div>
                <input type='text' onChange={handleInputChange} value={newCar}/>
                <input type='button' value='?' />
           </div>)
}

InformBlock.propTypes = {
    search: PropTypes.string
}

InformBlock.defaultProps = {
    search: ""
}