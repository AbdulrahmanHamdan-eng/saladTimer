import eggplant from './img/eggplant.png';
import Test from './Test';
import { styling } from './Variables';

function Eggplant() {
    return (
        <div style={ styling }>
            <Test duration={ 10 } image={ eggplant } color="#C28CCB" />
        </div>
    );
}

export default Eggplant;
