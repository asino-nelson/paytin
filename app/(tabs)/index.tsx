import ActionItems from '@/components/home/ActionItems';
import QuickSend from '@/components/home/QuickSend';
import WelcomeUser from '@/components/home/WelcomeUser';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='p-5 flex-1'>
      <WelcomeUser />
      <ActionItems />
      <QuickSend />


    </View>
  );
}

