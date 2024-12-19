import { observer } from 'mobx-react-lite';
import { IOrder } from '@/entities/order/model/types';
import {useStore} from "@/shared/lib/store";

export const OrderList = observer(() => {
  const { orderStore } = useStore();

  // можно при желании масштабировать сonst ORDER_COLUMNS = [
  //   { key: 'id', label: 'ID' и т.д},
  return (
      <article aria-label="Список ордеров">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
          <tr className="border-b border-gray-300">
            <th className="p-2 font-semibold">ID</th>
            <th className="p-2 font-semibold">Tokens</th>
            <th className="p-2 font-semibold">Dollars</th>
            <th className="p-2 font-semibold">Status</th>
            <th className="p-2 font-semibold">Created At</th>
          </tr>
          </thead>
          <tbody>
          {orderStore.orders.map((order: IOrder) => (
              <tr key={order.id} className="border-b border-gray-200">
                <td className="p-2">{order.id}</td>
                <td className="p-2">{order.amountTokens}</td>
                <td className="p-2">{order.amountDollars}</td>
                <td className="p-2">{order.status}</td>
                <td className="p-2">{new Date(order.createdAt).toLocaleString()}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </article>
  );
});
