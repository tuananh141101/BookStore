import { useParams } from "react-router-dom";

const DetaiItemProduct = () => {
  const params = useParams();
  console.log(params.id);
  return <div>DetaiItemProduct</div>;
};

export default DetaiItemProduct;
