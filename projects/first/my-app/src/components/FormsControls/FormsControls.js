import styles from './FormsControls.module.css'
export const Textarea = ({input, meta, ...props}) => { // теперь пропсы содержат все, кроме input и meta
    const hasError = meta.touched && meta.error
    return(
        <div className={styles.formControl+' '+ (hasError? styles.error: '')} >
            <div>
            <textarea {...input}{...props}/>
            </div>
             {/* если этот элемент был тронут (Textarea) и error есть, то покажи span */}
           {hasError &&  <span>{meta.error}</span> } 
        </div>
    )
}


export const Input =({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl+' '+ (hasError? styles.error: '')} >
            <div className={styles.input}>
            <input {...input}{...props}/>
            </div>
             {/* если этот элемент был тронут и error есть, то покажи span */}
           {hasError &&  <span>{meta.error}</span> } 
        </div>
    )
}









// import styles from './FormsControls.module.css'


// export const FormControl = ({input,meta,child, ...props}) =>{
//     const hasError = meta.touched && meta.error
//     return(
//         <div className={styles.formControl+' '+ (hasError? styles.error: '')} >
//             <div>
//             {props.cheldren}
//             </div>
//              {/* если этот элемент был тронут (Textarea) и error есть, то покажи span */}
//            {hasError &&  <span>{meta.error}</span> } 
//         </div>
//     )
// }

// export const Textarea = (props) => { // теперь пропсы содержат все, кроме input и meta
//     const {input, meta, child, ...restProps} = props
//     return(
//     <FormControl {...props}><textarea {...input} {...restProps}/> </FormControl>
//     )
// }


// export const Input =(props) => {
//     const {input, meta, child, ...restProps} = props
//     return (
//         <FormControl {...props}><input {...input} {...restProps}/> </FormControl>
//     )
// }


