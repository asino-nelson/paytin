import ActionItems from '@/components/home/ActionItems';
import Card from '@/components/home/Card';
import QuickSend from '@/components/home/QuickSend';
import RecentActivity from '@/components/home/RecentActivity';
import WelcomeUser from '@/components/home/WelcomeUser';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView >
      <ScrollView
        className=' p-5 pb-20 bg-lime-200 '
        showsVerticalScrollIndicator={false}
      >
        <WelcomeUser />
        <Card />
        <ActionItems />
        <QuickSend />
        <RecentActivity />
      </ScrollView>
    </SafeAreaView >

  );
}

