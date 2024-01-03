import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Categories from "./pages/Categories/Categories";
import DetaiItemProduct from "./components/Categories/DetaiItemProduct";
import Blog from "./pages/Blog/Blog";
import Author from "./pages/Author/Author";
import Notfound from "./pages/Notfound";
import Admin from "./admin/Admin";
import Login from "./pages/Login/Login";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import FrequentlyAskedQuestions from "./components/FAQ/FrequentlyAskedQuestions";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Client */}
            <Route index element={<Home />} />

            <Route path="categories" element={<Categories />} />
            <Route
              path="categories/products/:id"
              element={<DetaiItemProduct />}
            />

            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="author" element={<Author />} />
            <Route path="blog" element={<Blog />} />
            <Route path="login" element={<Login />} />
            <Route path="faq" element={<FrequentlyAskedQuestions />} />
            {/* Page 404 */}
            <Route path="*" element={<Notfound />} />
            {/* Admin */}
            <Route path="dashboard" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
