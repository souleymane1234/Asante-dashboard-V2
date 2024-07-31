// import styles from "@/app/ui/dashboard/products/products.module.css"
import styles from "./product.module.css"
import Search from "../../ui/dashboard/search/search"
import Link from "next/link"
import Image from "next/image"
import Pagination from "../../ui/dashboard/pagination/pagination"
const InfirmierPage = () => {
    return (
      <div className={styles.containerFluid}>
        <div className={styles.top}>
          <Search />
          <Link href="/dashboard/infirmiers/add">
            <button className={styles.addButton}>Ajouter</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td className="text-center">Nom et prenom</td>
              <td className="text-center">Sexe</td>
              <td className="text-center">Email</td>
              <td className="text-center">date de creation</td>
              <td className="text-center">contact</td>
              <td className="text-center">numeroordre</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={`${styles.product} ${styles.value}`}>
                  <Image src="/avatar.png" alt="" width={40} height={40} className={styles.productImage} />
                  Diallo Fatoumata
                </div>
              </td>
              <td className={styles.value}>Feminin</td>
              <td className={styles.value}>diallo@gmail.com</td>
              <td className={styles.value}>13.01.2024</td>
              <td className={styles.value}>0102030405</td>
              <td className={styles.value}>1234</td>
              <td>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>Voir plus</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    )
  }
  
  export default InfirmierPage