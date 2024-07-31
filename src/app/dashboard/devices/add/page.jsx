import styles from "../../../ui/dashboard/products/addProductPage/addProductPage.module.css"
const AddDevicesPage = () => {
    return (
    <div className={styles.container}>
        <form action="" className={styles.form}>
            <input type="text" placeholder="Reference (nom)" name="reference" required />
            <input type="text" placeholder="Numero de serie" name="numero de serie" required />
            <input type="text" placeholder="Imei" name="imei" required />
            <input type="text" placeholder="Description" name="description" required />
            <button type="submit">Submit</button>
        </form>
    </div>
    )
  }
  
  export default AddDevicesPage