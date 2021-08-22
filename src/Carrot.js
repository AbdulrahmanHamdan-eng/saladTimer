import carrot from './img/carrot.png';
import Test from './Test';
import { styling } from './Variables.js';
function Carrot() {
    return (
        <div style={ styling }>
            <Test duration={ 5 } image={ carrot } color=" #F98F43" />
        </div>
    );
}

export default Carrot;
