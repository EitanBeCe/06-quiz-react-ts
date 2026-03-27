import { DependencyList, useEffect, useRef } from "react"

/**
 * Runs an effect for a primary dependency and any additional dependencies.
 * Set skipFirstMount to true to skip the initial mount run.
 */
export function useOnChange<T>(
  state: T,
  effect: (state: T) => void | (() => void),
  otherDeps: DependencyList = [],
  skipFirstMount = false
) {
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (skipFirstMount && isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    isFirstRender.current = false

    return effect(state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, skipFirstMount, ...otherDeps])
}
