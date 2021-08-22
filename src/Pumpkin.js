import Test from './Test';
import pumpkin from './img/pumpkin.png';
import { styling } from './Variables';
function Pumpkin() {
    return (
        <div style={ styling }>
            <Test duration={ 50 } image={ pumpkin } color="#F77E39" />
        </div>
    );
}

export default Pumpkin;
