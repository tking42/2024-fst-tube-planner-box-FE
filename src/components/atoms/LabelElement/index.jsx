const LabelElement = ({inputName} ) => {
    return (
        <label htmlFor={inputName}>{inputName}</label>
    //     weird stuff happening when trying to add 'for' in label tag
    )
}

export default LabelElement