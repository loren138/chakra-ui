import { defineRecipe } from "../../styled-system"

export const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    flexShrink: "0",
    outline: "0",
    lineHeight: "1.2",
    isolation: "isolate",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "normal",
    colorPalette: "gray",
    focusVisibleRing: "outside",
    _disabled: {
      layerStyle: "disabled",
    },
    _icon: {
      fontSize: "1em",
    },
  },

  variants: {
    size: {
      xs: {
        gap: "1",
        h: "6",
        minW: "6",
        fontSize: "xs",
        borderRadius: "sm",
        px: "2",
      },
      sm: {
        gap: "2",
        h: "8",
        minW: "8",
        fontSize: "sm",
        borderRadius: "sm",
        px: "3",
      },
      md: {
        gap: "2",
        h: "10",
        minW: "10",
        borderRadius: "md",
        fontSize: "sm",
        px: "4",
      },
      lg: {
        gap: "3",
        h: "12",
        minW: "12",
        borderRadius: "lg",
        fontSize: "md",
        px: "5",
      },
    },

    variant: {
      solid: {
        bg: "colorPalette.600",
        color: "white",
        _hover: {
          bg: "colorPalette.700",
        },
        _expanded: {
          bg: "colorPalette.700",
        },
        _active: {
          bg: "colorPalette.800",
        },
      },
      subtle: {
        bg: { base: "colorPalette.100", _dark: "colorPalette.400/20" },
        color: { base: "colorPalette.700", _dark: "colorPalette.200" },
        _hover: {
          bg: { base: "colorPalette.200", _dark: "colorPalette.400/24" },
        },
        _expanded: {
          bg: { base: "colorPalette.200", _dark: "colorPalette.400/24" },
        },
        _active: {
          bg: { base: "colorPalette.300", _dark: "colorPalette.400/30" },
        },
      },
      outline: {
        bg: "bg",
        borderWidth: "1px",
        borderColor: { base: "colorPalette.200", _dark: "colorPalette.200/20" },
        color: { base: "colorPalette.700", _dark: "colorPalette.200" },
        _hover: {
          bg: { base: "colorPalette.50", _dark: "colorPalette.400/10" },
        },
        _expanded: {
          bg: { base: "colorPalette.50", _dark: "colorPalette.400/10" },
        },
        _active: {
          bg: { base: "colorPalette.100", _dark: "colorPalette.400/20" },
        },
      },
      ghost: {
        color: { base: "colorPalette.700", _dark: "colorPalette.200" },
        _hover: {
          bg: { base: "colorPalette.100", _dark: "colorPalette.400/20" },
        },
        _expanded: {
          bg: { base: "colorPalette.100", _dark: "colorPalette.400/20" },
        },
        _active: {
          bg: { base: "colorPalette.200", _dark: "colorPalette.400/24" },
        },
      },

      plain: {
        color: "fg",
      },
    },
  },

  compoundVariants: [
    {
      variant: "solid",
      colorPalette: "gray",
      css: {
        bg: { base: "gray.800", _dark: "gray.200" },
        color: { base: "white", _dark: "gray.800" },
        _hover: {
          bg: { base: "gray.700", _dark: "gray.300" },
        },
        _expanded: {
          bg: { base: "gray.700", _dark: "gray.300" },
        },
        _active: {
          bg: { base: "gray.600", _dark: "gray.400" },
        },
      },
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "solid",
    colorPalette: "gray",
  },
})
