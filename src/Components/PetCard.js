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

// Using a ternary operator to display the NoPetCardInfo component if isPetEmpty is equal to true
// othewise the PetCardInfo component is displayed