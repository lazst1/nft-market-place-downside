import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
export default function Page(props) {
  const { title, children, noFooter } = props;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <SideMenu />
      <div className="main-div">{children}</div>
      {!noFooter && <Footer />}
    </>
  );
}
