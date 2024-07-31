// import styles from "@/app/ui/dashboard/products/products.module.css"
import styles from "./devices.module.css"
import Search from "../../ui/dashboard/search/search"
import Link from "next/link"
import Image from "next/image"
import Pagination from "../../ui/dashboard/pagination/pagination"
const DevicesPage = () => {
    return (  
      <div className={styles.containerFluid}>
        <div className={styles.top}>
          <Search />
          <Link href="/dashboard/devices/add">
            <button className={styles.addButton}>Ajouter</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td className="text-center">Reference</td>
              <td className="text-center">Numero de serie</td>
              <td className="text-center">Imei</td>
              <td className="text-center">date de creation</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.value}>Nokia</td>
              <td className={styles.value}>REF00225789</td>
              <td className={styles.value}>051799</td>
              <td className={styles.value}>12.03.2024</td>
              <td>
                {/* <Link href="/dashboard/products/test"> */}
                  <button className={`${styles.button} ${styles.view}`}>Voir plus</button>
                {/* </Link> */}
                <button className={`${styles.button} ${styles.delete}`}>Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    )
  }
  
  export default DevicesPage