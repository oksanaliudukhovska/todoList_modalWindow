import './ModalWind.css';

export const ModalWind = ({call, onDestroy, onRemoveItem}) => {
    if(!call){
        return null;
    }
// const closeModal = (e) => {
//     if(e.target.className === 'myModal'){
//         onDestroy();
//     }
// }
//лучше так не добавлять лучше оставлять чтобы закрывалось на кнопку

    return (
    // <div className='myModal' onClick={closeModal}>
        <div id='customModal'> 
        <div id="customModal-content">
            <i className="close" onClick={onDestroy}>X</i>
            <h1>Delete note?</h1>
            <div id="btns">
                <button className='accept'onClick={onRemoveItem}>Yes, delete</button>
                <button className='reject'onClick={onDestroy}>No, stay</button>
            </div>
        </div>

    </div>
    );
}    