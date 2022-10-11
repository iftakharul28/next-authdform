import '../styles/globals.css';
import { AuthContextProvider } from '../context/AuthContext';
import { Navbar, ProtectedRoute } from '../components';
import { useRouter } from 'next/router';

const noAuthRequired = ['/', '/login', '/signup'];
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      <Navbar />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
