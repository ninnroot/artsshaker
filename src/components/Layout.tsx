import Footer from '@/footer';
import { NavBar } from './navigation';

const Layout = ({ children }: any) => {
  return (
    <>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
