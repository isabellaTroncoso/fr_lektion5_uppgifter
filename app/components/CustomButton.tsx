import styles from "./Custombutton.module.css";

interface CustomButtonProps {
    buttonText: string
}

export function CustomButton (props: CustomButtonProps) {
return (
    <>

    <div>
    <button className={styles.btn}>
    <p className={styles.btnTextColor}>{props.buttonText}</p>
    </button>
    </div>
    </>
);
}