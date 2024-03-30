import { useRef } from "react";

import PopupWithForm from "./PopupWithForm";
function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const name = useRef();
  const link = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ name: name.current.value, link: link.current.value });
  }
  
  return (
    <>
      <PopupWithForm
        name={"add-cards"}
        title={"New Place"}
        buttonName={"Create"}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        {" "}
        <label>
          <input
            type="text"
            name="title"
            ref={name}
            id="title-input"
            className="popup__input popup__input_type_title"
            placeholder="Title"
            minLength={2}
            maxLength={30}
            required
          />
          <span className="title-input-error" />
        </label>
        <label>
          <input
            type="url"
            name="image"
            ref={link}
            id="image-input"
            className="popup__input popup__input_type_image"
            placeholder="Picture Link"
            required
          />
          <span className="image-input-error" />
        </label>
      </PopupWithForm>
    </>
  );
}

export default AddPlacePopup;