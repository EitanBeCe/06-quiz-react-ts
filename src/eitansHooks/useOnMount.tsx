import { useEffect } from "react"

/**
 * A mount-only effect helper.
 * Executes the provided callback once after mount, like useEffect with an empty dependency array [].
 * If the callback returns a function, it will be called on unmount.
 */
export function useOnMount(effect: () => void | (() => void)) {
  useEffect(() => {
    return effect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
