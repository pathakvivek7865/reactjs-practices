import * as React from "react"
import { useUpdateEffect } from "./use-update-effect"

/**
 * React hook to console-log a value when it mounts
 * and as it updates.
 *
 * @param label a label for the component
 * @param values parameters to log
 */
export function useLogger(label: string, ...values: any[]) {
  React.useEffect(() => {
    console.log(`${label} mounted:`, ...values)
    return () => {
      console.log(`${label} unmounted`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useUpdateEffect(() => {
    console.log(`${label} updated:`, ...values)
  })
}
