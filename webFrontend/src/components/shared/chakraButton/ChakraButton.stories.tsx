import { ChakraProvider } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

import theme from '../../../stylesheets/theme/theme';

import CustomButton from './ChakraButton';

const meta = {
  title: 'Button',
  tags: ['autodocs'],
  decorators: [
    // eslint-disable-next-line @typescript-eslint/naming-convention
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
  component: CustomButton,
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Submit',
    disabled: false,
    onClick: () => {
      console.log('primary button clicked');
    },
  },
};

export const Outline: Story = {
  args: {
    children: 'Submit',
    variant: 'outline',
    disabled: false,
    // ...Primary.args,
    onClick: () => {
      console.log('Outline Button Clicked');
    },
  },
};
