import { Component } from "react";

class ClassComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Anders',
            gender: 'male',
            age: '40'
        }
    }

    displayFunc = () => {
        return (
            <p>Hello</p>
        )
    }


    render() {
        return (
            <>
                <h1>This is an Class Component</h1>
                <h3>{this.state.name}</h3>
                <this.displayFunc />
            </>
        )
    }
}

export default ClassComponent;