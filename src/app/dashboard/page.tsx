"use client"
import styles from "../ui/dashboard/dashboard.module.css"
import Card from "../ui/dashboard/card/card"
import Transactions from "../ui/dashboard/transactions/transactions"
import Chart from "../ui/dashboard/chart/chart"
import Rightbar from "../ui/dashboard/rightbar/rightbar"
import { useParams } from 'next/navigation';
const Dashboard = () => {
  const { name } = useParams();
  console.log("monnnnnnnn ", name)
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
          <Transactions />
          {/* <Chart /> */}
      </div>
      {/* <div className={styles.side}>
        <Rightbar />
      </div> */}
    </div>
  )
}

export default Dashboard
