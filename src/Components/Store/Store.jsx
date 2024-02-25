import { Heading, SimpleGrid, Spinner, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import DataCard from "./DataCard";
import { CartContext } from "../MainApp/App";

const Store = () => {
  const { updateCart } = useContext(CartContext);

  const {
    dataObj: { data, loading, error },
  } = useContext(CartContext);

  return (
    <VStack w={"100%"}>
      <Heading mb={4}>Your Store</Heading>
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#00a773"
          size="xl"
          data-testid="store-spinner"
        />
      )}
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          xl: 4,
        }}
        spacing={10}
      >
        {data &&
          data.map((item) => (
            <DataCard key={item.id} item={item} updateCart={updateCart} />
          ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Store;
