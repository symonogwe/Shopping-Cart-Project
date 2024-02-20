import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { object } from "prop-types";

const DataCard = ({ item }) => {
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
        <Stack
          mt={5}
          spacing={6}
          //   border={"1px solid white"}
          padding={2}
          borderRadius={4}
        >
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
        <ButtonGroup spacing={5}>
          <Button variant={"solid"} color="#00a773">
            Buy Now
          </Button>
          <Button variant={"ghost"} color="#00a773">
            Add to Cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

DataCard.propTypes = {
  item: object,
};

export default DataCard;
