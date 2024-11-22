import { Center, Container } from '@mantine/core';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <Container className="max-h-screen max-w-screen">
      <Center className="h-full w-full">{children}</Center>
    </Container>
  );
};

export default Layout;
