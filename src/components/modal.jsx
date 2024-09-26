
import {useRef} from 'react'
import styles from './modal.module.scss';

export default function Modal({children,title,root,refb1,refb2}){

    const ref = useRef(null);

    function callBack(e){
        root.unmount();
        document.querySelector("#modal").remove();
       
    }

    function handleClick(){
        ref.current.classList.add(styles.fadeOut);
        ref.current.addEventListener('animationend',callBack,{once:true});
        refb1.current.disabled = false;
        refb2.current.disabled = false;
    }

    return(
        <div ref={ref} className={styles.modalContainer}>
            <div className={styles.modalView}>
                <div className={styles.modalHeader}>
                    <div>{title}</div>
                    <div>
                        <button className={styles.closeButton} onClick={handleClick}>x</button>
                    </div>
                </div>
                <div className={styles.modalContent}>
                    {children}
                </div>
            </div>
        </div>
    );
}