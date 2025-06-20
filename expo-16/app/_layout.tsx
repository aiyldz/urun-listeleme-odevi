import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import '../global.css';

export default function Layout() {
  const [loaded, error] = useFonts({
    Lobster: require('../assets/Lobster-Regular.ttf'),
  });
  return (
    <>
      <Stack />
    </>
  );
}
