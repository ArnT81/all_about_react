//  HOC´s
import WithCounter from "./WithCounter";
import WithWrapper from './WithWrapper';


//  When using HIGHER ORDER COMPONENTS (HOC´s) you will only get logic from the closets wrapping component if not previous props is handled in the HOC itself
function OriginalComponent({ name, count, incrementCount, decrementCount }) {
    return (
        <div>
            <h1>HOC</h1>
            <h3>{name}</h3>
            <h3>{count}</h3>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    )
}

export default WithWrapper(WithCounter(OriginalComponent));
