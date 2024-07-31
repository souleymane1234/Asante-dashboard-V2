// import styles from "@/app/ui/dashboard/products/products.module.css"
import styles from "./hopitaux.module.css"
import Search from "../../ui/dashboard/search/search"
import Link from "next/link"
import Image from "next/image"
import Pagination from "../../ui/dashboard/pagination/pagination"
const HopitauxPage = () => {
    return (  
      <div className={styles.containerFluid}>
        <div className={styles.top}>
          <Search />
          <Link href="/dashboard/hopitaux/add">
            <button className={styles.addButton}>Ajouter</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td className="text-center">Nom</td>
              <td className="text-center">Publique</td>
              <td className="text-center">Contact</td>
              <td className="text-center">Reference</td>
              <td className="text-center">Email</td>
              <td className="text-center">date de creation</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.value}>Clinique Saint Henriette</td>
              <td className={styles.value}>Non</td>
              <td className={styles.value}>0303030401</td>
              <td className={styles.value}>REF0022PBCIH</td>
              <td className={styles.value}>Henriette.examen@gmail.com</td>
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
  
  export default HopitauxPage