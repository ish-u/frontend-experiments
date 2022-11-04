import { useEffect, useRef, useState } from "react";
import styles from "./Grid.module.css";

const Grid = () => {
  const grid = useRef<HTMLDivElement>(null);
  const [tiles, setTiles] = useState<boolean[][]>([]);
  const visited = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const resize = () => {
      const rows = Math.floor(window.innerHeight / 100);
      const cols = Math.floor(window.innerWidth / 100);

      grid.current?.style.setProperty("--columns", cols.toString());
      grid.current?.style.setProperty("--rows", rows.toString());

      const newTiles: boolean[][] = [];
      for (var i = 0; i < rows; i++) {
        newTiles.push(new Array(cols).fill(true));
      }
      for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
          visited.current[i.toString() + j.toString()] = true;
        }
      }
      setTiles(newTiles);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const setVisible = (r: number, c: number): boolean => {
    const key = r.toString() + c.toString();
    if (visited.current[key] === false) {
      visited.current[key] = true;
      const div = document.querySelector(`[data-row='${r}'][data-col='${c}']`);
      if (div !== null) {
        setTimeout(() => {
          div.className = styles.tileVisible;
          setVisible(r + 1, c);
          setVisible(r - 1, c);
          setVisible(r, c + 1);
          setVisible(r, c - 1);
          setVisible(r + 1, c + 1);
          setVisible(r + 1, c - 1);
          setVisible(r - 1, c + 1);
          setVisible(r - 1, c - 1);
          return false;
        }, 50);
      }
    }
    return false;
  };
  const setInvisible = (r: number, c: number): boolean => {
    const key = r.toString() + c.toString();
    if (visited.current[key] === true) {
      visited.current[key] = false;
      const div = document.querySelector(`[data-row='${r}'][data-col='${c}']`);
      if (div !== null) {
        setTimeout(() => {
          div.className = styles.tileInvisible;
          setInvisible(r + 1, c);
          setInvisible(r - 1, c);
          setInvisible(r, c + 1);
          setInvisible(r, c - 1);
          setInvisible(r + 1, c + 1);
          setInvisible(r + 1, c - 1);
          setInvisible(r - 1, c + 1);
          setInvisible(r - 1, c - 1);
          return false;
        }, 50);
      }
    }
    return false;
  };
  return (
    <div
      ref={grid}
      className={`${styles.grid} bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400`}
    >
      {tiles.map((row, r) =>
        row.map((e, c) => (
          <div
            key={Math.random()}
            onClick={() => {
              const key = r.toString() + c.toString();
              if (visited.current[key] === false) {
                setVisible(r, c);
              } else if (visited.current[key] === true) {
                setInvisible(r, c);
              }
            }}
            data-row={r}
            data-col={c}
            className={`${styles.tileVisible}`}
          ></div>
        ))
      )}
    </div>
  );
};

export default Grid;
