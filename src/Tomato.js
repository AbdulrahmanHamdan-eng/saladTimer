import Test from './Test';
import tomato from './img/tomato.png';
import { styling } from './Variables';
function Tomato() {
    return (
        <div style={ styling }>
            <Test duration={ 25 } image={ tomato } color="#C82A00" />
        </div>
    );
}

export default Tomato;
