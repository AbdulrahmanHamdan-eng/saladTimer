import Test from './Test';
import onion from './img/onion.png';
import { styling } from './Variables';
function Onion() {
    return (
        <div style={ styling }>
            <Test duration={ 30 } image={ onion } color="#9E2969" />
        </div>
    );
}

export default Onion;
