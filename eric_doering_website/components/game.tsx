"use client";

import React, { useRef, useEffect, useState } from "react";

export default function Game() {
  const GAME_WIDTH = 800; 
  const GROUND_Y = 200;

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);
  const obstacleTimerRef = useRef(0);

  const [running, setRunning] = useState(false);
  const runningRef = useRef(running);
  const [score, setScore] = useState(0);
  const scoreRef = useRef(score);
  scoreRef.current = score;

  const [highScore, setHighScore] = useState(0);

    useEffect(() => {
    const savedHighScore = localStorage.getItem("highScore");
    if (savedHighScore) {
        setHighScore(parseInt(savedHighScore, 10));
    }
    }, []);

  const [player, setPlayer] = useState({ x: 80, y: GROUND_Y, vy: 0, w: 34, h: 40, grounded: true });
  const playerRef = useRef(player);
  playerRef.current = player;

  const [obstacles, setObstacles] = useState<Array<any>>([]);
  const obstaclesRef = useRef(obstacles);
  obstaclesRef.current = obstacles;

  const [speed, setSpeed] = useState(250);
  const SPAWN_INTERVAL = 1400; 

  function startGame() {
    setScore(0);
    scoreRef.current = 0;
    setObstacles([]);
    const initialPlayer = { x: 80, y: GROUND_Y, vy: 0, w: 34, h: 40, grounded: true };
    setPlayer(initialPlayer);
    playerRef.current = initialPlayer;
    setSpeed(250);
    obstacleTimerRef.current = 0;
    lastTimeRef.current = performance.now();
    runningRef.current = true;
    setRunning(true);
    requestRef.current = requestAnimationFrame(loop);
  }

  function endGame() {
    runningRef.current = false;
    setRunning(false);

    try {
      const stored = Number(localStorage.getItem("hop-highscore") || 0);
      const ns = Math.max(stored, scoreRef.current);
      localStorage.setItem("hop-highscore", String(ns));
      setHighScore(ns);
    } catch (e) {
      setHighScore((prev) => Math.max(prev, scoreRef.current));
    }

    if (requestRef.current) cancelAnimationFrame(requestRef.current);
    requestRef.current = null;
  }

  function collide(a: any, b: any) {
    return !(a.x + a.w < b.x || a.x > b.x + b.w || a.y + a.h < b.y || a.y > b.y + b.h);
  }

  function loop(now: number) {
    const dt = Math.min(40, now - (lastTimeRef.current || now));
    lastTimeRef.current = now;

    const prev = playerRef.current;
    let vy = prev.vy;
    let y = prev.y;
    const GRAVITY = 1500; 
    vy += (GRAVITY * dt) / 1000;
    y += (vy * dt) / 1000;
    let grounded = false;
    if (y >= GROUND_Y) {
      y = GROUND_Y;
      vy = 0;
      grounded = true;
    }
    const newPlayer = { ...prev, y, vy, grounded };
    playerRef.current = newPlayer;
    setPlayer(newPlayer);

    const moved = obstaclesRef.current
      .map((o) => ({ ...o, x: o.x - (speed * dt) / 1000 }))
      .filter((o) => o.x + o.w > -40);

    const playerBox = { x: newPlayer.x, y: newPlayer.y - newPlayer.h, w: newPlayer.w, h: newPlayer.h };
    for (const o of moved) {
      const obsBox = { x: o.x, y: GROUND_Y - o.h, w: o.w, h: o.h };
      if (collide(playerBox, obsBox)) {

        setObstacles(moved);
        obstaclesRef.current = moved;
        endGame();
        return;
      }
    }

    moved.forEach((o) => {
      if (!o.passed && o.x + o.w < newPlayer.x) {
        o.passed = true;
        scoreRef.current += 1;
        setScore(scoreRef.current);
        setSpeed((sp) => sp + 6);
      }
    });

    setObstacles(moved);
    obstaclesRef.current = moved;

    obstacleTimerRef.current += dt;
    if (obstacleTimerRef.current > SPAWN_INTERVAL) {
      obstacleTimerRef.current = 0;

      const w = 18 + Math.floor(Math.random() * 28);
      const h = 26 + Math.floor(Math.random() * 36);
      const newObs = { x: GAME_WIDTH + 40, w, h, passed: false };
      const next = [...obstaclesRef.current, newObs];
      setObstacles(next);
      obstaclesRef.current = next;
    }

    if (runningRef.current) requestRef.current = requestAnimationFrame(loop);
  }

  function jump() {
    const p = playerRef.current;
    if (p.grounded) {
      const updated = { ...p, vy: -700, grounded: false };
      playerRef.current = updated;
      setPlayer(updated);
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.code === "Space") {
        e.preventDefault();
        if (!runningRef.current) startGame();
        else jump();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  function renderPlayer() {
    const p = playerRef.current;
    const style: any = {
      position: "absolute",
      left: p.x,
      top: p.y - p.h,
      width: p.w,
      height: p.h,
      borderRadius: 6,
      background: "rgb(0,0,0)",
      boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontWeight: "700",
      pointerEvents: "none",
    };

    return (
      <div style={style} aria-hidden>
        <div style={{ fontSize: 14 }}>:)</div>
      </div>
    );
  }

  function renderObstacles() {
    return obstacles.map((o, i) => {
      const style: any = {
        position: "absolute",
        left: o.x,
        top: GROUND_Y - o.h,
        width: o.w,
        height: o.h,
        background: "linear-gradient(180deg,#6a994e,#386641)",
        borderRadius: 4,
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      };
      return <div key={i} style={style} />;
    });
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-gray-200">Hop the Hurdles</h1>

      <div className="flex gap-4 items-center mb-3">
        <div>
          <div className="text-sm text-gray-400">Score</div>
          <div className="text-xl font-mono text-gray-200">{score}</div>
        </div>
        <div>
          <div className="text-sm text-gray-400">Best</div>
          <div className="text-xl font-mono text-gray-200">{highScore}</div>
        </div>

        <div className="ml-auto">
          <button
            onClick={() => (runningRef.current ? endGame() : startGame())}
            className={`px-4 py-2 rounded shadow ${runningRef.current ? "bg-red-500 text-white" : "bg-green-500 text-white"}`}
          >
            {runningRef.current ? "Stop" : "Start"}
          </button>
        </div>
      </div>

      <div className="mb-2 text-sm text-gray-400">Click / tap the area or press Space to jump. Avoid the obstacles — game over on collision.</div>

      <div
        className="relative rounded-lg border border-gray-200 bg-white dark:bg-gray-800 overflow-hidden"
        style={{ height: 260, userSelect: "none" }}
        onMouseDown={() => {
          if (!runningRef.current) startGame(); else jump();
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          if (!runningRef.current) startGame(); else jump();
        }}
        role="application"
        aria-label="Hop the Hurdles game area"
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,#cde8ff,#f7fbff)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: GROUND_Y, height: 60, background: "linear-gradient(180deg,#d9d9d9,#bdbdbd)" }} />

        {renderPlayer()}
        {renderObstacles()}

        {!runningRef.current && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <div className="text-lg font-medium mb-1">Ready to hop?</div>
            <div className="text-sm text-gray-500">Click / tap or press Space to start and jump.</div>
          </div>
        )}

        <div style={{ position: "absolute", right: 12, top: 8, background: "rgba(255,255,255,0.75)", padding: "4px 8px", borderRadius: 8, fontSize: 12 }}>
          Speed: {Math.round(speed)}
        </div>
      </div>
    </div>
  );
}
