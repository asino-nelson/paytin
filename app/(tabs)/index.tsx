import ActionItems from '@/components/home/ActionItems';
import QuickSend from '@/components/home/QuickSend';
import RecentActivity from '@/components/home/RecentActivity';
import WelcomeUser from '@/components/home/WelcomeUser';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='p-5 flex-1 bg-lime-100'>
      <WelcomeUser />
      <ActionItems />
      <QuickSend />
      <RecentActivity />


    </View>
  );
}

