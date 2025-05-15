import ActionItems from '@/components/home/ActionItems';
import Card from '@/components/home/Card';
import QuickSend from '@/components/home/QuickSend';
import RecentActivity from '@/components/home/RecentActivity';
import WelcomeUser from '@/components/home/WelcomeUser';
import { View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='p-5 flex-1 bg-lime-100'>
      <WelcomeUser />
      <Card />
      <ActionItems />
      <QuickSend />
      <RecentActivity />


    </View>
  );
}

