import styles from "../../../ui/dashboard/products/addProductPage/addProductPage.module.css"
const AddHospitalPage = () => {
    return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="text" placeholder="Nom" name="nom" required />
            <input type="text" placeholder="Type" name="type" required />
            <input type="text" placeholder="Localisation" name="localisation" required />
            <input type="text" placeholder="Reference" name="reference" required />
            <input type="email" placeholder="Email" name="email" required />
            <input type="text" placeholder="Contact" name="contact" required />
            <select name="isPublic" id="isPublic">
                <option value="general">Choisir la categorie</option>
                <option value="publique">Publique</option>
                <option value="prive">Prive</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
  }
  
  export default AddHospitalPage