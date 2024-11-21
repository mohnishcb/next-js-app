import { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import theme from '@/styles/MantineTheme';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <MantineProvider /* withGlobalStyles withNormalizeCSS */ theme={theme}>
      {children}
    </MantineProvider>
  );
};

export default Provider;
