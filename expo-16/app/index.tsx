import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5001/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View className="mb-4 flex h-[250] w-[250]  items-center justify-center rounded-lg bg-white p-3 shadow-md ">
      <View>
        <Text className="mb-1 font-[Lobster] text-lg">{item.name}</Text>
        <Text className="mb-1 font-[Lobster] text-orange-600">{item.price} TL</Text>
        <Text className="font-[Lobster] text-gray-600">{item.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className=" flex-1 bg-gray-100 p-4">
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Index;
