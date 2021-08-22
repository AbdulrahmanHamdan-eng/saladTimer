import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useState, useEffect, useRef, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import son from './son.mp3';
import './Test.css';

function reducer(state, action) {
      switch (action.type) {

            case 'start':
                  return (state.minute === 0 && state.second === 0) ? {
                        minute: 0,
                        second: 0,
                        state: 'inline-block',
                        state1: 'inline-block',
                        state2: 'none'
                  } : {
                        minute: (state.second === 0) ? state.minute - 1 : state.minute,
                        second: (Number(state.second) === 0) ? 59 : state.second - 1,
                        state: 'none',
                        state1: 'block',
                        state2: 'block'
                  };

            default:
                  return state;
      }
}

function Test({ duration, image, color }) {
      const history = useHistory();
      const [ button, Dispatch ] = useReducer(reducer, { minute: duration, second: 0, state: 'block', state1: 'none', state2: 'none' });
      const [ value, setValue ] = useState(' ');
      const [ state2, setState2 ] = useState('Pause');
      const [ state3, setState3 ] = useState(100);
      const pause = useRef();
      function timer() {
            pause.current = setTimeout(() => {
                  setState3(prev => prev - (100 / (duration * 60)));
                  Dispatch({ type: 'start' });
            }, 1000);
            return pause.current;
      }
      useEffect(() => {
            console.log(value);
            switch (value) {
                  case 'start':
                        timer();
                        break;
                  case 'repeat':
                        button.minute = duration;
                        setState3(100);
                        timer();
                        setValue('start');
                        break;
                  case 'cancel':
                        history.push("/");
                        break;
                  case 'Pause':
                        console.log('pause', pause.current);
                        clearTimeout(pause.current);
                        setState2('Resume');
                        break;
                  case 'Resume':
                        setState2('Pause');
                        timer();
                        return pause.current;
                  default:
                        return value;
            }
      }, [ button.second, value ]);

      function end() {
            return <iframe iframe src={ son } width={ 0 } height={ 0 } />;
      }

      function start() {
            return (
                  <div className="styling">
                        <CircularProgressbarWithChildren
                              value={ state3 }
                              strokeWidth={ 1 }
                              styles={ buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.25,
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Text size
                                    textSize: '16px',
                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,
                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',
                                    // Colors
                                    pathColor: `${color}`,
                                    textColor: '#f88',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                              }) }
                        >
                              <img src={ image } width="200px" />
                              <h1 style={ { color: color } }>
                                    <span>{ (button.minute < 10) ? 0 : '' }</span>
                                    { button.minute }:
                                    <span>{ (button.second < 10) ? 0 : '' }</span>
                                    { button.second }
                              </h1>
                        </CircularProgressbarWithChildren>
                        <div class="button_styling">
                              <button style={ { display: button.state, background: color } } onClick={ () => setValue(`${(button.minute === 0 && button.second === 0) ? 'repeat' : 'start'}`) }>Start</button>
                              <button style={ { display: button.state1, background: color } } onClick={ () => setValue('cancel') }>Cancel</button>
                              <button style={ { display: button.state2, background: color } } onClick={ () => setValue(state2) } >{ state2 }</button>
                              { (button.minute === 0 && button.second === 0) && end()
                              }
                        </div>
                  </div>
            );
      }

      return start();
}

export default Test;
