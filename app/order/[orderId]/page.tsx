import Container from "@/components/Container";
import NullData from "@/components/NullData";
import OrderDetails from "./OrderDetails";
import getOrderById from "@/actions/getOrderById";

interface IParams {
  orderId?: string;
}

const Product = async ({ params }: { params: IParams }) => {
  const order = await getOrderById(params);

  if (!order) {
    return <NullData title="Oops! Order with the given id does not exist." />;
  }

  return (
    <div className="p-8">
      <Container>
        <OrderDetails order={order} />
      </Container>
    </div>
  );
};

export default Product;
