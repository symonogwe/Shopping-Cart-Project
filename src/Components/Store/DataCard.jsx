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
import { useState } from "react";

const DataCard = ({ item, updateCart }) => {
  const [value, setValue] = useState("");

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
      <CardFooter
        borderTop={"1px solid white"}
        display={"grid"}
        justifyItems={"center"}
      >
        <form
          className="card-form"
          onSubmit={(e) => {
            e.preventDefault();

            const inputField = document.getElementById(
              `number-input-${item.id}`
            );

            const dataObj = {
              ...item,
              count: Number(inputField.value),
            };

            updateCart(dataObj);

            console.log(inputField.value);

            inputField.value = "";

            setValue("");
          }}
        >
          <Text textAlign={"center"} mb={1}>
            Amount
          </Text>
          <NumberInput min={1} mb={4}>
            <NumberInputField
              id={`number-input-${item.id}`}
              required={true}
              value={value}
              onInput={(e) => setValue(e.target.value)}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button variant={"outline"} color="#00a773" type="submit">
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
