import { Heading, SimpleGrid, Spinner, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import DataCard from "./DataCard";

const Store = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <VStack>
      <Heading mb={4}>Your Store</Heading>
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#00a773"
          size="xl"
        />
      )}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          xl: 4,
        }}
        spacing={10}
      >
        {data && data.map((item) => <DataCard key={item.id} item={item} />)}
      </SimpleGrid>
    </VStack>
  );
};

export default Store;
