import Test from './Test';
import radish from './img/radish.png';
import { styling } from './Variables';


function Radish() {

    return (
        <div style={ styling } >
            <Test duration={ 20 } image={ radish } color="#E70046" />

        </div>
    );
}

export default Radish;
