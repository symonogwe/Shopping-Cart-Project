import { useContext } from "react";
import { CartContext } from "../MainApp/App";
import {
  Heading,
  VStack,
  Image,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Tfoot,
} from "@chakra-ui/react";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { deleteItem } = useContext(CartContext);

  function deleteCartItem(e) {
    console.log(e.target.id);
    const targetId = Number(e.target.id);

    deleteItem(targetId);
  }

  return (
    <VStack w={"100%"}>
      <Heading mb={5} color={"#00a773"}>
        MY SHOPPING CART
      </Heading>
      <TableContainer>
        <Table>
          <TableCaption>My Cart Items</TableCaption>
          <Thead>
            <Tr>
              <Th color={"#00a773"}>Item Image</Th>
              <Th color={"#00a773"}>Item Title</Th>
              <Th color={"#00a773"}>Item Count</Th>
              <Th color={"#00a773"} isNumeric>
                Item Pricing
              </Th>
              <Th color={"#00a773"} isNumeric>
                Amount
              </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((object) => (
              <Tr key={object.id}>
                <Td>
                  <Image src={object.image} boxSize={"100px"} />
                </Td>
                <Td>{object.title}</Td>
                <Td>{object.count}</Td>
                <Td>${object.price}</Td>
                <Td>${object.price * object.count}</Td>
                <Td>
                  <Button
                    color="red"
                    id={object.id}
                    onClick={(e) => deleteCartItem(e)}
                  >
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total</Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th fontSize={"lg"} color={"#00a773"}>
                $
                {cart.reduce((accumulator, current) => {
                  const total =
                    Number(current.price) * Number(current.count) + accumulator;
                  return Math.round(total * 100) / 100;
                }, 0)}
              </Th>
              <Th></Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default Cart;
