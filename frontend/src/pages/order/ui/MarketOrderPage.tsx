import { OrderList } from './OrderList';
import { OrderForm } from '@/features/order/ui/OrderForm';
import { TokenRate } from '@/entities/tokenRate/ui/ToketRate';

export function MarketOrderPage() {
  return (
    <article>
      <header className="mb-6">

        <h1 className="text-2xl font-bold">Market Order</h1>
      </header>

      <section aria-labelledby="token-rate-section" className="mb-6">
        <h2 id="token-rate-section" className="text-xl font-semibold mb-2">
          Текущий курс токена
        </h2>
        <TokenRate />
      </section>

      <section aria-labelledby="create-order-section" className="mb-6">
        <h2 id="create-order-section" className="text-xl font-semibold mb-2">
          Создать рыночный ордер
        </h2>
        <OrderForm />
      </section>

      <section aria-labelledby="orders-list-section">
        <h2 id="orders-list-section" className="text-xl font-semibold mb-2">
          Список ордеров
        </h2>
        <OrderList />
      </section>
    </article>
  );
}
