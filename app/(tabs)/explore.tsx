import EarningCard from '@/components/statistics/EarningCard';
import Overview from '@/components/statistics/Overview';
import Period from '@/components/statistics/Period';
import SpendingCard from '@/components/statistics/SpendingCard';
import TopHeader from '@/components/statistics/TopHeader';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className='p-5 bg-lime-200'
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <TopHeader />
        <Period />
        <View className='flex-row items-center justify-between my-4'>
          <EarningCard />
          <SpendingCard />
        </View>
        <Overview />
      </ScrollView>
    </SafeAreaView>

  );
}

