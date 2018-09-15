import React from 'react';
import PetCardInfo from './PetCardInfo';
import NoPetCardInfo from './NoPetCardInfo';
import './PetCard.css';

export default (props) => (
	<div className="pet-card">
	{props.isPetEmpty
	? <NoPetCardInfo />
	: <PetCardInfo pet={props.pet}/>}
    </div>
)
