import { defineRecipe } from "../../styled-system"
import { badgeRecipe } from "./badge"

const { variants, defaultVariants } = badgeRecipe

export const codeRecipe = defineRecipe({
  className: "code",
  base: {
    display: "inline-block",
    fontFamily: "mono",
    colorPalette: "gray",
  },
  variants,
  defaultVariants,
})
