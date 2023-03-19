import { Suspense } from 'react';
import { Container, Header } from '../app/App.styled';
import { Outlet } from 'react-router-dom';
import { Link } from '../app/App.styled';
import { GlobalStyles } from 'GlobalStyles.stylad';
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyles />
    </Container>
  );
};

export default SharedLayout;
