import styles from "../../../ui/dashboard/products/addProductPage/addProductPage.module.css"
const AddProductPage = () => {
    return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="text" placeholder="specialite" name="specialite" required />
            <input type="text" placeholder="Nom et prenom" name="nom" required />
            <select name="sexe" id="sexe">
                <option value="general">Choisir le sexe</option>
                <option value="feminin">Feminin</option>
                <option value="masculin">Masculin</option>
            </select>
            <input type="email" placeholder="Email" name="email" required />
            <input type="text" placeholder="Contact" name="contact" required />
            <input type="text" placeholder="Numero d'ordre" name="numero d'ordre" required />
            <input type="password" placeholder="Mot de passe" name="mot de passe" required />
            <input type="text" placeholder="Type" name="type" required />
            <button type="submit">Submit</button>
        </form>
    </div>
    )
  }
  
  export default AddProductPage