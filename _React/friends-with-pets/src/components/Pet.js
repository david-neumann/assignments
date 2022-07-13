import React from 'react';

export default function Pet(props) {
    return (
        <p>
            <strong>Name:</strong> {props.name} • <strong>Breed:</strong> {props.breed}
        </p>
    )
}