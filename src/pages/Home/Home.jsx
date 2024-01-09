import "./Home.scss";
import { useEffect, useMemo, useState } from "react";
import { dataProducts } from "../../services/UserServices";
import BannerSlide from "../../components/Banner-Slide/BannerSlide";
import ProductCategories from "../../components/Home/ProductCategories";
import ProductItemCarousel from "../../components/Home/ProductItemCarousel";
import AuthorCarousel from "../../components/Home/AuthorCarousel";
import SelectedBook from "../../components/Home/SelectedBook";
import ProductBlog from "../../components/Home/ProductBlog";

const Home = () => {
  const [listItemBestSelling, setListItemBestSelling] = useState([]);
  const [listItemLatest, setListItemLatest] = useState([]);
  const [listItemSale, setListItemSale] = useState([]);
  const [dataItem, setDataItem] = useState([]);

  const getUsers = async () => {
    try {
      let res = await dataProducts();
      let resBestSelling = [...res.data]
        .sort(() => Math.random() - 0.5)
        .slice(0, 8);
      let resLatest = [...res.data].sort(() => Math.random() - 0.5).slice(0, 8);
      let resSale = [...res.data]
        .filter((item) => {
          return item.sale === true;
        })
        .sort(() => Math.random() - 0.5)
        .slice(0, 8);
      setListItemBestSelling(resBestSelling);
      setListItemLatest(resLatest);
      setListItemSale(resSale);
      setDataItem(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <BannerSlide />
      <ProductCategories />
      <AuthorCarousel dataItem={dataItem} />
      <ProductItemCarousel
        listItemSale={listItemSale}
        listItemBestSelling={listItemBestSelling}
        listItemLatest={listItemLatest}
        dataItem={dataItem}
      />
      <SelectedBook />
      <ProductBlog />
    </>
  );
};

export default Home;
