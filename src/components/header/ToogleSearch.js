
import React from 'react'
import './Layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
 function ToogleSearch () {

    return (
        <div>
            <div class="InputContainer">
                 <input placeholder="Search.." id="input" class="input" name="text" type="text"></input>
                 <button className='enter-search'><FontAwesomeIcon icon={faSearch} /></button>
                </div>
            
        </div>
    )
}

export default ToogleSearch