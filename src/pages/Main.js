import React, {useRef} from "react";
// import {Link} from 'react-router-dom';

// import Home from "../container/Home";
import WaveSvg from "../container/WaveSvg";
import FullMoonSvg from "../container/FullMoonSvg";

const Main = (props) => {
  const testDom = useRef(null)
  const testDom1 = useRef(null)
  function mouseMove(e) {
    const secOffset = window.innerWidth / 2
    const { pageX, pageY } = e
    // testDom.current.style.top = pageY+'px'
    testDom.current.style.left = pageX+'px'
    // testDom1.current.style.top = pageY+'px'
    testDom1.current.style.left = pageX - secOffset +'px'
    return { pageX, pageY }
  } 
  function hangInOn(target) {
    if(!target) return;
    window.location.href = target === 'nt' ? 'http://noistommy.github.io' : 'http://noistommy.github.io/hw_ui'
  }
  const moon_style = { isolation: 'isolate '}
  return (
    <div className="daynnight" onMouseMove={mouseMove}>
      {/* <div className="ga-list selection">
        <div className="item">
          <Link to="/page/1">page 1</Link>
        </div>
        <div className="item">
          <Link to="/page/2">page 2</Link>
        </div>
      </div>
      <Home value={true} /> */}
      
      
      <div className="ga-grid divide-2">
        <div className="column">
          <div className="wave-wrapper" onClick={(e) => hangInOn('nt')}>
            <div className="test" ref={testDom}>Wave</div>
            <div id="ship">ㅅ</div>
            <WaveSvg />
          </div>
        </div>
        <div className="column">
          <div className="moon-wrapper" onClick={(e) => hangInOn('hw')}>
            <div className="test1" ref={testDom1}>Moon</div>
            <div className="moon">
              <FullMoonSvg style={moon_style} />
            </div>
          </div>
        </div>
      </div>
  
    </div>
  )
};

export default Main;