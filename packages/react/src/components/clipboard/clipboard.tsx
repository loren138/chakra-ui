"use client"

import { Clipboard as ArkClipboard } from "@ark-ui/react/clipboard"
import {
  type HTMLChakraProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useClipboardStyles,
} = createSlotRecipeContext("clipboard")

export { useClipboardStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardRootProps
  extends HTMLChakraProps<"div", ArkClipboard.RootProps>,
    SlotRecipeProps<"clipboard">,
    UnstyledProp {}

export const ClipboardRoot = withProvider<HTMLDivElement, ClipboardRootProps>(
  ArkClipboard.Root,
  "root",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardTriggerProps
  extends HTMLChakraProps<"button", ArkClipboard.TriggerProps> {}

export const ClipboardTrigger = withContext<
  HTMLButtonElement,
  ClipboardTriggerProps
>(ArkClipboard.Trigger, "trigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardControlProps
  extends HTMLChakraProps<"div", ArkClipboard.ControlProps> {}

export const ClipboardControl = withContext<
  HTMLDivElement,
  ClipboardControlProps
>(ArkClipboard.Control, "control", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardIndicatorProps
  extends HTMLChakraProps<"div", ArkClipboard.IndicatorProps> {}

export const ClipboardIndicator = withContext<
  HTMLDivElement,
  ClipboardIndicatorProps
>(ArkClipboard.Indicator, "indicator", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardInputProps
  extends HTMLChakraProps<"input", ArkClipboard.InputProps> {}

export const ClipboardInput = withContext<
  HTMLInputElement,
  ClipboardInputProps
>(ArkClipboard.Input, "input", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ClipboardLabelProps
  extends HTMLChakraProps<"label", ArkClipboard.LabelProps> {}

export const ClipboardLabel = withContext<
  HTMLLabelElement,
  ClipboardLabelProps
>(ArkClipboard.Label, "label", { forwardAsChild: true })
