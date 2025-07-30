import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react"
import { forwardRef } from "react"

export interface RadioGroupProps extends ChakraRadioGroup.RootProps {
  children: React.ReactNode
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup(props, ref) {
    const { children, ...rest } = props
    return (
      <ChakraRadioGroup.Root ref={ref} {...rest}>
        {children}
      </ChakraRadioGroup.Root>
    )
  },
)

export interface RadioProps extends ChakraRadioGroup.ItemProps {
  children: React.ReactNode
}

export const Radio = forwardRef<HTMLLabelElement, RadioProps>(
  function Radio(props, ref) {
    const { children, ...rest } = props
    return (
      <ChakraRadioGroup.Item ref={ref} {...rest}>
        <ChakraRadioGroup.ItemHiddenInput />
        <ChakraRadioGroup.ItemIndicator />
        <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>
      </ChakraRadioGroup.Item>
    )
  },
)