import './Modal.css'

export default function Modal() {

    const closeModal=()=>{
        document.querySelector('.modal').style.right = '-500px';
    }

    return (
        <>
            <div className="modal">
                
                <p onClick={closeModal} id='close_modal'>⨉</p>

                <h1 className='text-2xl pb-[30px]'>Ваша корзина</h1>

                <span>Пока что здесь путо...</span>
            </div>
        </>
    )
}