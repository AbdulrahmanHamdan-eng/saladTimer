import Test from './Test';
import lettuce from './img/lettuce.png';
import { styling } from './Variables';
function Lettuce() {
    return (
        <div style={ styling }>
            <Test duration={ 60 } image={ lettuce } color="#96B60B" />
        </div>
    );
}

export default Lettuce;
