import {
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
} from "@chakra-ui/react";
import { func, object } from "prop-types";
import { useRef } from "react";

const DataCard = ({ item, updateCart }) => {
  const ref = useRef(null);

  return (
    <Card>
      <CardBody>
        <Image
          src={item.image}
          boxSize={{
            base: "300px",
            md: "",
            xl: "",
          }}
          objectFit={"cover"}
          alt={item.title}
        />
        <Stack mt={5} spacing={6} padding={2} borderRadius={4}>
          <Heading color="#00a773" size={"md"}>
            {item.title}
          </Heading>
          <Text>{item.description}</Text>
          <HStack justifyContent={"space-between"}>
            <Text fontSize={"xl"} color="#00a773">
              ${item.price}
            </Text>
            <Text>Rating: {item.rating.rate}</Text>
          </HStack>
        </Stack>
      </CardBody>
      <CardFooter borderTop={"1px solid white"}>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            const dataObj = {
              id: item.id,
              count: Number(ref.current.value),
            };

            if (ref.current) {
              updateCart(dataObj);
              ref.current.value = "";
            }
          }}
        >
          <Text textAlign={"center"}>Amount</Text>
          <NumberInput min={1}>
            <NumberInputField ref={ref} required={true} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button
            width={"40%"}
            variant={"outline"}
            color="#00a773"
            type="submit"
          >
            Add to Cart
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

DataCard.propTypes = {
  item: object,
  updateCart: func,
};

export default DataCard;
