import React from 'react';
import PetCardInfo from './PetCardInfo';
import NoPetCardInfo from './NoPetCardInfo';
import './PetCard.css';

export default (props) => (
	<div className="pet-card">
	{props.isPetEmpty
	? <NoPetCardInfo pet={ props.pet } />
	: <PetCardInfo pet={props.pet}/>}
    </div>
)

// handles weather or not NoPetCardInfo component is displayed if no pet is returned
// or displays PetCardInfo component if pet is returned