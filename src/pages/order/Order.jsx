
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import {OrderSuccess} from "./components/orderSuccess"
import {OrderFailed} from "./components/OrderFailed"
export const Order = () => {
  useTitle("Order-Summary")
  const { state } = useLocation();

  return (
    <main>
      { state.status ? <OrderSuccess data={state.data} /> : <OrderFailed /> }
    </main>
  )
}