import { observer } from 'mobx-react-lite';
import { useStore } from '@/shared/lib/store';

export const TokenRate = observer(() => {
  const { tokenRateStore } = useStore();
  return <p className="text-gray-700">1 Token = {tokenRateStore.rate} USD</p>;
});
