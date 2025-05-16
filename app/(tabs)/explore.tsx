import Period from '@/components/statistics/Period';
import TopHeader from '@/components/statistics/TopHeader';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView className='p-5 bg-lime-200'>
        <TopHeader />
        <Period />
      </ScrollView>
    </SafeAreaView>

  );
}

