import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { createOrder } from '@/entities/order/api/orders.api';
import { TextField } from '@/shared/ui/TextField';
import { ToggleSwitch } from '@/shared/ui/ToggleSwitch';
import { CreateOrderButton } from './OrderButton';
import { useStore } from '@/shared/lib/store';
import { useOrderFormLogic } from '@/widgets/hooks/useOrderFormLogic';
import { InputMode } from '@/entities/order/model/types';

export const OrderForm = observer(() => {
  const { tokenRateStore, orderStore } = useStore();
  const [inputMode, setInputMode] = useState<InputMode>(InputMode.Tokens);
  const [tokenAmount, setTokenAmount] = useState('');
  const [dollarAmount, setDollarAmount] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreateOrder = async () => {
    const amountTokens = parseFloat(tokenAmount);
    const amountDollars = parseFloat(dollarAmount);

    if (isNaN(amountTokens) || isNaN(amountDollars)) {
      setError('Пожалуйста, введите корректные суммы.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const newOrder = await createOrder({ amountTokens, amountDollars });
      orderStore.addOrder(newOrder);
      setTokenAmount('');
      setDollarAmount('');
    } catch (error) {
      console.error(error);
      setError('Не удалось создать ордер. Попробуйте еще раз.');
    } finally {
      setIsLoading(false);
    }
  };

  useOrderFormLogic({
    inputMode,
    setInputMode,
    tokenAmount,
    setTokenAmount,
    dollarAmount,
    setDollarAmount,
    tokenRateStore,
    orderStore,
  });

  return (
    <form className="space-y-4" aria-label="Форма создания ордера">
      <ToggleSwitch
        id="inputModeSwitch"
        checked={inputMode === InputMode.Dollars}
        onChange={() =>
          setInputMode(
            inputMode === InputMode.Tokens
              ? InputMode.Dollars
              : InputMode.Tokens
          )
        }
        label={`Ввод в ${
          inputMode === InputMode.Tokens ? 'токенах' : 'долларах'
        }`}
      />

      {inputMode === InputMode.Tokens ? (
        <TextField
          label="Сумма в токенах"
          type="number"
          value={tokenAmount}
          onChange={(e) => setTokenAmount(e.target.value)}
          placeholder="0.0"
          step="0.000001"
        />
      ) : (
        <TextField
          label="Сумма в долларах"
          type="number"
          value={dollarAmount}
          onChange={(e) => setDollarAmount(e.target.value)}
          placeholder="0.0"
          step="0.01"
        />
      )}

      <div className="text-gray-700">
        <p>
          <strong>Итог в токенах:</strong> {tokenAmount || '0.0'}
        </p>
        <p>
          <strong>Итог в долларах:</strong> {dollarAmount || '0.0'}
        </p>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <CreateOrderButton onCreate={handleCreateOrder}>
        {isLoading ? 'Создание...' : 'Создать ордер'}
      </CreateOrderButton>
    </form>
  );
});
