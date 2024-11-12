import { useState } from "react";
import { useEffect } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty"
import { getUserOrders } from "../../services";
import { useTitle } from "../../hooks/useTitle";

export const Dashboard = () => {
  useTitle("DashBoard")
  const [orders, setOrders] = useState([]);

  const token = JSON.parse(sessionStorage.getItem("token"));
  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  // console.log(cbid)

  useEffect(() => {
    async function fetchOrders(){
       const data= await getUserOrders()
      //  console.log(data)
      setOrders(data);
    }
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        )) }
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>

    </main>
  )
}