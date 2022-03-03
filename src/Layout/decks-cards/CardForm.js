import React from "react";
import AddCardScreen from "./new/AddCardScreen";
import EditCardScreen from "./edit/EditCardScreen";

// Component to be used in both the Add Card and Edit Card Screens

function CardForm({ cardFront, handleCardFrontChange, cardBack, handleCardBackChange, onSubmit, buttonType}) {
  let button;
  if (buttonType === "addCard") {     
    button = <AddCardScreen type="submit" className="btn btn-primary" />;   
     } else {      
     button = <EditCardScreen type="submit" className="btn btn-primary" />;    
    } 
  
  return (
    <>
      <form onSubmit={onSubmit}>
      <div class="form-group">
        <label htmlFor="cardFront">Front</label>
        <textarea
          id="cardFront"
          name="cardFront"
          class="form-control"
          placeholder="Front side of card"
          rows="3"
          onChange={handleCardFrontChange}
          value={cardFront}
        />
      </div>
      <div class="form-group">
        <label htmlFor="cardBack">Back</label>
        <textarea
          id="cardBack"
          name="cardBack"
          class="form-control"
          placeholder="Back side of card"
          rows="3"
          onChange={handleCardBackChange}
          value={cardBack}
        />
      </div>

      <button>Submit</button>
      </form>    
    </>
  );
}

export default CardForm;
