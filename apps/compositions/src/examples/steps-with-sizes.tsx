import { For, Group, Stack } from "@chakra-ui/react"
import { Button } from "compositions/ui/button"
import {
  StepsCompleteContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "compositions/ui/steps"

export const StepsWithSizes = () => {
  return (
    <Stack gap="16">
      <For each={["sm", "md", "lg"]}>
        {(size) => (
          <StepsRoot key={size} size={size} count={3}>
            <StepsList>
              <StepsItem index={0} title="Step 1" />
              <StepsItem index={1} title="Step 2" />
              <StepsItem index={2} title="Step 3" />
            </StepsList>

            <StepsContent index={0}>Step 1</StepsContent>
            <StepsContent index={1}>Step 2</StepsContent>
            <StepsContent index={2}>Step 3</StepsContent>
            <StepsCompleteContent>All steps are complete!</StepsCompleteContent>

            <Group>
              <StepsPrevTrigger>
                <Button variant="outline" size="sm">
                  Prev
                </Button>
              </StepsPrevTrigger>
              <StepsNextTrigger>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </StepsNextTrigger>
            </Group>
          </StepsRoot>
        )}
      </For>
    </Stack>
  )
}
