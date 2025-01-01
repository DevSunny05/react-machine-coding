import React, { useState } from 'react'
import Modal from './Modal'

const ModalApp = () => {
    const [isShow,setIsShow]=useState(false)
    const [offerAccept,setOfferAccept]=useState(false)

    const openModal=()=>{
        setIsShow(true)
    }

    const closeModal=()=>{
        setIsShow(false)
        
    }

    const handleOfferAccept=()=>{
        setOfferAccept(true)
        setIsShow(false)
    }
  return (


    <div className='app'>
        {
            !offerAccept && <div className='show__offer'>
            <button onClick={openModal} className='offer__btn'>Show Offer</button>
        </div>
        }

        {
            offerAccept && 
            <div style={{fontSize:"25px"}}>
                Offer Accepted
            </div>
        }
        {
            isShow && <Modal closeModal={closeModal} handleOfferAccept={handleOfferAccept}/>
        }
    </div>
  )
}

export default ModalApp