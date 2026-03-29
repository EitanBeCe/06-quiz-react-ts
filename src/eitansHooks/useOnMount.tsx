import { useEffect } from "react"

/**
 * useEffect with an empty dependency array [].
 * A mount-only effect helper.
 * Executes the provided callback once after mount.
 * If the callback returns a function, it will be called on unmount.
 */
export function useOnMount(effect: () => void | (() => void)) {
  useEffect(() => {
    return effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
