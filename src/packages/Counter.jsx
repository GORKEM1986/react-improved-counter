import React from "react";
import CountUp, { useCountUp } from "react-countup";



const Counter = () => {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 50,
    duration: 2,
  });
  return (
    <div className="sayac">
      <div className="kutular">
        <div className="kutu kutu1">
          {
            <CountUp
              ref={countUpRef}
              start={0}
              end={100}
              duration={3}
              delay={1}
            />
          }
        </div>
        <div className="kutu kutu2" ref={countUpRef}>
          0
        </div>
        <div className="kutu kutu3">
        
          {
            <CountUp
              start={0}
              end={100}
              duration={1}
              prefix="&#8378;"
              suffix=" TL"
            />
          }
        </div>
        
      </div>
      <div className="butonlar">
        <button className="buton" onClick={start}>start</button>
        <button className="buton" onClick={pauseResume}>pauseResume</button>
        <button className="buton" onClick={reset}>reset</button>
        <button className="buton" onClick={() => update(100)}>update</button>
      </div>
      
      
    </div>
    
  );
};

export default Counter;
