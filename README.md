- ## title: Cellular Automaton Simulation
- ## summary: 1D Cellular Automaton Simulation. Demonstrates that complex structures can be created wiht set of very simple rules and outcome is hard to predict.
- ## stack: Javascript, Html
- ## url: https://chaos-theory.strix-aluco.workers.dev
---

1D Cellular Automaton Simulation.<br><br>
Written in HTML and Vanilla Javascript, with clear, simple animated visuals.<br>
It demonstrates how complex structures can emerge from a very simple set of
rules. Each row follows exactly from the one above it, yet for rules such as
Rule 30 there is no known shortcut to predict the pattern: the only way to
see row _n_ is to compute every row before it. Changing a single starting
cell can change everything below it. The process also can't be rel<br>

## Usage

Open `index.html` directly in a browser and pick a simulator.

Click cells in the first row of the grid to seed a starting pattern, then
hit **Generate** to watch the automaton fill in the rest of the grid row by
row, based on the selected rule.I

## Features

- **Rule 22** and **Rule 30** — elementary cellular automaton rules. Rule 30
  in particular is a classic example of seemingly random behaviour arising
  from a simple deterministic rule.
- **Custom Rule** — define your own rule by choosing the output cell for each
  of the 8 possible 3-cell predecessor patterns in the Settings panel. This
  covers all 256 elementary rules.
- Adjustable grid size (3x3 up to 100x100).
- Optional overlay showing, per cell, how many of its 3 predecessor cells are
  black. For Rule 22 this count alone decides the result (a cell turns black
  when exactly one predecessor is black); for Rule 30 and most other rules
  it does not.
- Fixed boundary: cells outside the left and right edges are treated as
  white, so on smaller grids patterns change shape once they reach the edges.
- Grid contents, rule definitions, and grid size persist across page reloads
  via `localStorage`.

## Files

- `index.html` — UI, styling, and app logic for the simulator.
- `table.js` — grid utilities and the cellular automaton rule engine.
