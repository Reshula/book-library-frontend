import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalArticles } from '../redux/cartSlice';
import "./pages.css";

const Layout = () => {
  const totalArticles = useSelector(getTotalArticles);
  return (
    <div className="layout-container">
      <nav className="nav">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/reading-list">Reading List</Link>
        <Link className="link" to="/Cart">Cart{
          (totalArticles)>0 && <span className="quantity">{totalArticles}</span>
        }
        </Link>
      </nav>
    </div>
  );
};

export default Layout;
