// import { DependencyList, useEffect, useRef } from "react"

// Didn't use, because of no errors on deps array

/**
 * A useEffect wrapper that highlights the primary dependency.
 * Runs an effect when the primary dependency or any additional dependency changes.
 * Set skipFirstMount to true to skip the initial mount run.
 */
// export function useOnChange<T>(
//   state: T,
//   effect: (state: T) => void | (() => void),
//   otherDeps: DependencyList = [],
//   skipFirstMount = false
// ) {
//   const isFirstRender = useRef(true)

//   useEffect(() => {
//     if (skipFirstMount && isFirstRender.current) {
//       isFirstRender.current = false
//       return
//     }

//     isFirstRender.current = false

//     return effect(state)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [state, skipFirstMount, ...otherDeps])
// }

// Example
//   useOnChange(
//     remaningTime,
//     newVal => {
//       if (newVal <= 0) {
//         onTimeout()
//       }
//     },
//     [onTimeout]
//   )
