import React, { useState } from "react";
import "./Checkout.css";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addContact,
  deleteContact,
  editContact,
} from "../Reduxtoolkit/Address";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { setSelectedAddress } from "../Reduxtoolkit/Slice";
import AddNew from "./AddNew";

export default function Checkout() {
  const [address, setAddress] = useState(false);
  const [addAddress, setAddAddress] = useState({
    street: "",
    city: "",
    states: "",
    zipcode: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);

  const dispatch = useDispatch();
  const additems = useSelector((state) => state.address.contacts);

  const handleDeleteClick = (item) => {
    dispatch(deleteContact(item));
    setSelectedAddressIndex(null);
  };

  const handleEditClick = (item) => {
    setEditMode(true);
    setAddAddress(item);
    setAddress(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editMode) {
      dispatch(editContact({ id: addAddress.id, ...addAddress }));
    } else {
      dispatch(addContact(addAddress));
    }

    setAddAddress({
      street: "",
      city: "",
      states: "",
      zipcode: "",
    });
    setAddress(false);
    setEditMode(false);
  };

  const handleRadioChange = (index) => {
    setSelectedAddressIndex(index);
    dispatch(setSelectedAddress(additems[index])); // Update: use additems[index]
  };

  return (
    <div className="checout">
      <div className="checkout__checkout">
        <div className="checkout__top">
          <h1>Select Address</h1>
        </div>

        {additems?.map((prop, index) => (
          <div className="additems" key={prop.id}>
            <input
              type="radio"
              checked={index === selectedAddressIndex}
              onChange={() => handleRadioChange(index)}
            />
            <div className="save__add">
              <p>{prop.street}</p>
              <p>{prop.city}</p>
              <p>{prop.states}</p>
              <p>{prop.zipcode}</p>
            </div>
            <div className="edit__delete">
              <MdModeEdit
                onClick={() => handleEditClick(prop)}
                className="edit__icon"
              />
              <MdDelete
                onClick={() => handleDeleteClick(prop.id)}
                className="edit__icon"
              />
            </div>
          </div>
        ))}

        <div className="checkout__bottom" onClick={() => setAddress(true)}>
          <IoMdAddCircle className="checkout__icon" />
          <p className="checkout__Para">Add New Address</p>
        </div>
        <div className="checkout__button">
          <Link to={"/cart"}>
            <button className="checkout__back">Back</button>{" "}
          </Link>

          <Link to={selectedAddressIndex !== null ? "/pay" : ""}>
            <button
              className={`checkout__next ${
                selectedAddressIndex === null ? "disabled" : ""
              }`}
            >
              Next
            </button>
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          {address && (
            <AddNew
              addAddress={addAddress}
              setAddAddress={setAddAddress}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}
