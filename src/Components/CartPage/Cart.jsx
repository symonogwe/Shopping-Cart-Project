import { useContext } from "react";
import { CartContext } from "../MainApp/App";
import { HStack, Heading, VStack, Image, Box, Text } from "@chakra-ui/react";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <VStack w={"100%"}>
      <Heading mb={5}>MY SHOPPING CART</Heading>
      <Box w={"100%"} minHeight={"500px"}>
        {cart.map((cartObj) => (
          <HStack key={cartObj.id} justifyContent={"space-between"} mb={6}>
            <Image src={cartObj.image} boxSize={"100px"} />
            <Text>{cartObj.title}</Text>
            <Text>${cartObj.count * cartObj.price}</Text>
          </HStack>
        ))}
      </Box>
    </VStack>
  );
};

export default Cart;
