import { createContext } from "@chakra-ui/react-context"
import {
  omitThemingProps,
  ReducedMotionProps,
  SystemStyleObject,
  ThemingProps,
  useMultiStyleConfig,
  useTheme,
} from "@chakra-ui/system"
import { runIfFn } from "@chakra-ui/shared-utils"
import { useMemo } from "react"
import {
  MenuDescendantsProvider,
  MenuProvider,
  useMenu,
  UseMenuProps,
} from "./use-menu"

const [MenuStylesProvider, useMenuStyles] = createContext<
  Record<string, SystemStyleObject>
>({
  name: `MenuStylesContext`,
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `,
})

export { useMenuStyles }

type MaybeRenderProp<P> = React.ReactNode | ((props: P) => React.ReactNode)

export interface MenuProps
  extends UseMenuProps,
    ReducedMotionProps,
    ThemingProps<"Menu"> {
  children: MaybeRenderProp<{
    isOpen: boolean
    onClose: () => void
    forceUpdate: (() => void) | undefined
  }>
}

/**
 * Menu provides context, state, and focus management
 * to its sub-components. It doesn't render any DOM node.
 *
 * @see Docs https://chakra-ui.com/docs/components/menu
 */
export const Menu: React.FC<MenuProps> = (props) => {
  const { children, reduceMotion } = props

  const styles = useMultiStyleConfig("Menu", props)
  const ownProps = omitThemingProps(props)
  const { direction } = useTheme()
  const { descendants, ...ctx } = useMenu({ ...ownProps, direction })
  const context = useMemo(() => ctx, [ctx])

  const { isOpen, onClose, forceUpdate } = context

  return (
    <MenuDescendantsProvider value={descendants}>
      <MenuProvider value={{ ...context, reduceMotion }}>
        <MenuStylesProvider value={styles}>
          {runIfFn(children, { isOpen, onClose, forceUpdate })}
        </MenuStylesProvider>
      </MenuProvider>
    </MenuDescendantsProvider>
  )
}

Menu.displayName = "Menu"
