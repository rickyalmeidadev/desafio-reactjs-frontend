import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../components';
import theme from '../../assets/styles/theme';

describe('<Button />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <ThemeProvider theme={theme}>
        <Button>Click Me</Button>
      </ThemeProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render children as its text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Click Me</Button>
      </ThemeProvider>,
    );
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('should have styles based in received props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button fullWidth noFill>
          Click Me
        </Button>
      </ThemeProvider>,
    );

    expect(getByTestId('button')).toHaveStyle(`
      width: 100%;
      background-color: transparent;
    `);
  });

  it('should have type based in received props', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button type="submit">Click Me</Button>
      </ThemeProvider>,
    );

    expect(getByTestId('button')).toHaveAttribute('type', 'submit');
  });
});
