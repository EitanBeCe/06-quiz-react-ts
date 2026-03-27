import { DependencyList, useEffect, useRef } from "react"

/**
 * Runs an effect when the main dependency changes, skipping the initial mount.
 * Additional dependencies can be provided and will be appended to the effect dependency list.
 */
export function useOnChange<T>(
  state: T,
  effect: (state: T) => void | (() => void),
  otherDeps: DependencyList = []
) {
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    return effect(state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, ...otherDeps])
}
