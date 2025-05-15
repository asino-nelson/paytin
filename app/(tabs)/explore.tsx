import TopHeader from '@/components/statistics/TopHeader';
import { ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView className='px-5 py-10 bg-lime-200'>
        <TopHeader />

      </ScrollView>
    </SafeAreaView>

  );
}

