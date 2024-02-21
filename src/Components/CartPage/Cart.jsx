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
} from "@chakra-ui/react";

const Cart = () => {
  const { cart } = useContext(CartContext);

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
                <Td>{object.price}</Td>
                <Td>{object.price * object.count}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default Cart;
