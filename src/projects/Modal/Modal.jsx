import React from "react";

const Modal = ({closeModal,handleOfferAccept}) => {

    const handleOutsideClick=(e)=>{
        
        if(e.target.className=="modal"){
            closeModal()
        }
    }
  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal__content">
        <button onClick={closeModal} className="close__btn">X</button>

        <div className="content">
          Click the button below to accept the offer !!!
        </div>

        <button onClick={handleOfferAccept} className="accept__btn">Accept Offer</button>
      </div>
    </div>
  );
};

export default Modal;
