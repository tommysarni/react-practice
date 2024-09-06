import { useState } from "react";
import "./index.css";

/**
 * Simple Boss Battle showin off useState Hook
 *
 * @returns StateHookComponent
 */

const StateHookComponent = () => {
  // state
  const [enemyHealth, setEnemyHealth] = useState(100);

  /**
   * Creates a Fireball element and animates it + starts enemy hit animation after
   */
  const castSpell = () => {
    const arena = document.getElementById("arena");
    if (!arena) return;
    const fireball = document.createElement("div");

    fireball.className = "attack";
    fireball.innerHTML = "🔥";
    const fireballMove = [
      { transform: "translateX(0%)" },
      {
        transform: `translateX(${Math.floor(arena.offsetWidth) - 50}px)`,
      },
    ];

    const fireballTiming = {
      duration: 2000,
      iterations: 1,
      fill: "forwards",
    };

    arena.replaceChildren(...arena.children, fireball);
    fireball.animate(fireballMove, fireballTiming);

    fireball.getAnimations()[0].onfinish = () => {
      runEnemyAnimation();
      setEnemyHealth((prev) => Math.max(0, prev - 20));
      fireball.remove();
    };
  };

  /**
   * Runs the enemy hit animation
   */
  const runEnemyAnimation = () => {
    const enemy = document.getElementById("enemy");

    if (enemy) {
      const [anim] = enemy.getAnimations();
      if (anim) {
        if (anim.playState === "running") {
          anim.finish();
          anim.play();
        }
        anim.play();
      }
    }
  };

  /**
   * HTML for Battle
   * @returns Battle HTML
   */
  const fightEnemy = () => (
    <>
      <div id="arena">
        <div id="hero"></div>
        <div id="enemy"></div>
      </div>
      <div className="enemyHealthContainer">
        <p>Health Remaining: {enemyHealth}</p>
        <div
          className="healthbar_left"
          style={{ width: enemyHealth + "%" }}
        ></div>
        <div className="healthbar_full"></div>
      </div>

      <button onClick={() => castSpell()}>Cast Fireball</button>
    </>
  );

  /**
   * Removes the disabled on restart buttton and adds onclick to reset enemy health
   */
  const waitForRestart = (e) => {
    e.target.toggleAttribute("disabled");
    e.target.onclick = () => {setEnemyHealth(100);};
  };

  /**
   * HTML for Win
   * @returns Battle Won HTML
   */
  const success = () => {
    return (
      <>
        <h3>Congrats! You beat the enemy</h3>
        <button
          onAnimationEnd={(e) => waitForRestart(e)}
          className="ablify"
          disabled
        >
          Restart
        </button>
      </>
    );
  };

  return (
    <div className="wrapper">{enemyHealth > 0 ? fightEnemy() : success()}</div>
  );
};

export default StateHookComponent;
