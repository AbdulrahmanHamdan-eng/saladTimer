import Test from './Test';
import pepper from './img/pepper.png';
import { styling } from './Variables';
function Pepper() {
    return (
        <div style={ styling }>
            <Test duration={ 40 } image={ pepper } color="#DE8204" />
        </div>
    );
}

export default Pepper;
