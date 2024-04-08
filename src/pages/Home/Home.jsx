import "./Home.scss";
import { useEffect } from "react";
import BannerSlide from "../../components/Banner-Slide/BannerSlide";
import ProductCategories from "../../components/Home/ProductCategories";
import ProductItemCarousel from "../../components/Home/ProductItemCarousel";
import AuthorCarousel from "../../components/Home/AuthorCarousel";
import SelectedBook from "../../components/Home/SelectedBook";
import ProductBlog from "../../components/Home/ProductBlog";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchProductsBestSelling,
  fetchProductsLatest,
  fetchProductsSale,
} from "../../Store/api/products";

const Home = () => {
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.products.listProducts);
  // const targetValue = "Fiction";
  // const filterObject = products.filter((obj) =>
  //   obj.categories.includes(targetValue)
  // );
  // console.log(">> target value = ", filterObject);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductsBestSelling());
    dispatch(fetchProductsLatest());
    dispatch(fetchProductsSale());
  }, []);

  return (
    <>
      <BannerSlide />
      <ProductCategories />
      <AuthorCarousel />
      <ProductItemCarousel />
      <SelectedBook />
      <ProductBlog />
    </>
  );
};

export default Home;
