import React from 'react';

export default function Child(props) {
    //  Destructuring may be made in the function argument
    //  Examle:  export default function Child({state, variable, object})
    //  Props is an React component utility and may not be passed to f.ex. an div

    //  Deep destructuring within the component (may be done in function argument to but not at the same time as props)
    const { state, variable, object: { name, age, gender, address: { country, city } }, ICanNameThisWhatheverIWant, InLine } = props;


    //  Entire objects are not valid as a React children, keys needs to be specified
    return (
        <div>
            <h1>This is the Child</h1>
            <p>{props.state}</p>
            <p>{props.variable}</p>
            <p>{props.object.name}</p>
            <p>{props.object.age}</p>
            <p>{props.object.gender}</p>
            <p>{props.object.address.country}</p>
            <p>{props.object.address.city}</p>
            <p>{props.ICanNameThisWhatheverIWant}</p>
            <p>{props.InLine}</p>
            <h3>Destructured </h3>
            <p>{state}</p>
            <p>{variable}</p>
            <p>{name}</p>
            <p>{age}</p>
            <p>{gender}</p>
            <p>{country}</p>
            <p>{city}</p>
            <p>{ICanNameThisWhatheverIWant}</p>
            <p>{InLine}</p>

        </div>
    )
}
