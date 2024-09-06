import { useEffect, useState } from "react";
import "./index.css";

/**
 * Animations with sliders
 */
const EffectHookComponent = () => {
  const [speed, setSpeed] = useState(2);
  const [playInfinite, setPlayInfinite] = useState(false);

  const handleChange = (e) => {
    const sliderVal = e.target.value;
    setSpeed(sliderVal);
  };

  useEffect(() => {
    appendEasingFunctions();
  }, []);

  useEffect(() => {
    updateAnimationSpeed();
  }, [speed]);

  useEffect(() => {
    const balls = document.querySelectorAll(".ball");
    balls.forEach(updateLooping);
  }, [playInfinite]);

  const updateAnimationSpeed = () => {
    const balls = document.querySelectorAll(".ball");
    balls.forEach(updateBallSpeed);
  };

  const updateLooping = (ball) => {
    if (!ball) return;
    const [ballAnim] = ball.getAnimations();
    if (!ballAnim) return;
    ballAnim.effect.updateTiming({ iterations: playInfinite ? "Infinity" : 1 });
    if (!playInfinite) {
      ballAnim.finish();
    }
  };

  const updateBallSpeed = (ball) => {
    if (!ball) return;
    const [ballAnim] = ball.getAnimations();
    if (!ballAnim) return;
    ballAnim.effect.updateTiming({ duration: 2000 / speed });
  };

  const clickedPlay = () => {
    const balls = document.querySelectorAll(".ball");
    balls.forEach(playBall);
  };

  const playBall = (ball) => {
    if (!ball) return;
    const [ballAnim] = ball.getAnimations();
    if (!ballAnim) return;
    ballAnim.cancel();
    ballAnim.play();
  };

  const appendEasingFunctions = () => {
    const balls = document.querySelectorAll(".ball");
    balls.forEach((ball) => {
      const ballStyleComputed = window.getComputedStyle(ball);
      if (!ballStyleComputed) return;
      const timingFunction = (ballStyleComputed.animationTimingFunction || '').trim();

      const timing = ball.nextSibling;
      if (timing) {
        ball.nextSibling.textContent = timingFunction;
      }
    });
  };

  return (
    <>
      <div className="inputContainer">
        <input
          type="range"
          id="speed"
          name="speed"
          min=".1"
          max="2"
          value={speed}
          onChange={(e) => handleChange(e)}
          step=".1"
        />
        <p className="label">Speed {speed}</p>
      </div>
      <div className="inputContainer">
        <input
          type="checkbox"
          checked={playInfinite}
          onChange={() => setPlayInfinite((prev) => !prev)}
        />
        <p className="label">Loop</p>
      </div>
      <div className="inputContainer">
        <button disabled={playInfinite} onClick={() => clickedPlay()}>
          Play
        </button>
      </div>

      <div className="animWrapper">
        <div className="animContainer">
          <div className="ballContainer">
            <div className="ball"></div>
            <p className="timing"></p>
          </div>
        </div>
        <div className="animContainer">
          <div className="ballContainer">
            <div className="ball"></div>
            <p className="timing"></p>
          </div>
        </div>
        <div className="animContainer">
          <div className="ballContainer">
            <div className="ball"></div>
            <p className="timing"></p>
          </div>
        </div>
        <div className="animContainer">
          <div className="ballContainer">
            <div className="ball"></div>
            <p className="timing"></p>
          </div>
        </div>
        <div className="animContainer">
          <div className="ballContainer">
            <div className="ball"></div>
            <p className="timing"></p>
          </div>
        </div>
        <div className="animContainer">
          <div className="ballContainer">
            <div className="ball"></div>
            <p className="timing"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EffectHookComponent;
