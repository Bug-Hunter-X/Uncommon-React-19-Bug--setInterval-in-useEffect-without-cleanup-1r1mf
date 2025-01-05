# Uncommon React 19 Bug: setInterval in useEffect without cleanup

This repository demonstrates a common, yet easily overlooked, bug in React applications that often manifests in subtle ways, particularly with `setInterval` within `useEffect` hooks.

The core problem is the absence of a cleanup function in the `useEffect` hook, which results in memory leaks and potentially unpredictable behavior.

## Bug Description:

The provided `bug.js` file contains a React component that uses `setInterval` to update a counter every second. However, it lacks the essential cleanup function to stop the interval when the component unmounts. This leads to the interval continuing to run even after the component is removed from the DOM, leading to resource wastage and unexpected behavior.

## Solution:

The `bugSolution.js` file provides the corrected version of the component.  The key change is the introduction of a cleanup function returned by `useEffect`. This function clears the interval using `clearInterval` when the component unmounts or when the dependency array changes.

## How to reproduce:

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` (or `yarn install`).
4. Run `npm start` (or `yarn start`).

Observe the behavior of both `bug.js` and `bugSolution.js` and note the difference in memory management and overall behavior.