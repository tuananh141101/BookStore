import { useDispatch, useSelector } from "react-redux";
import { clearFilter, filterall } from "../../Store/api/categories";

const SideMainShop = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.categories.filter);
  console.table(">>> check filter >>>>", filter);

  return (
    <>
      <button onClick={() => dispatch(filterall())}>Filter All</button>
      <button onClick={() => dispatch(clearFilter())}>Clear</button>
    </>
  );
};

export default SideMainShop;
