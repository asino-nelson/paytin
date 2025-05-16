import EarningCard from '@/components/statistics/EarningCard';
import Period from '@/components/statistics/Period';
import TopHeader from '@/components/statistics/TopHeader';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView className='p-5 bg-lime-200'>
        <TopHeader />
        <Period />
        <EarningCard />
        <View className='w-full flex-row items-center justify-between'>

        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

