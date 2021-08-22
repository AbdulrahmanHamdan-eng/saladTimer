import cucumber from './img/cucumber.png';
import Test from './Test';
import { styling } from './Variables';

function Cucumber() {
    return (
        <div style={ styling }>
            <Test duration={ 15 } image={ cucumber } color="#38761C" />
        </div>
    );
}

export default Cucumber;
