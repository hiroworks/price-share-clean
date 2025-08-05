// app/index.tsx
import { View, Text } from 'react-native';

export default function Home() {
  console.log("✅ Home component loaded");  // ← ここ追加

  return (
    <View>
      <Text>Hello, world!</Text>
    </View>
  );
}
