const DateComponent = () => {
    const date = new Date();
    const monthNames = ['January',
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'Novembre', 
        'Decembre'];
    
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
       

    return(
        <span>{`${month} ${day}, ${year}`}</span>
    )
}
export default DateComponent