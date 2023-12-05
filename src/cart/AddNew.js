import React from "react";

export default function AddNew({ addAddress, setAddAddress, handleSubmit }) {
  return (
    <div className="address">
      <h1 className="add__Para">Add New Address</h1>
      <div>
        <label className="checkout__label">Street</label>
      </div>
      <input
        className="checkout__input"
        type="text"
        placeholder="street"
        value={addAddress.street}
        onChange={(e) =>
          setAddAddress({ ...addAddress, street: e.target.value })
        }
      />
      <div>
        <label className="checkout__label">City</label>
      </div>
      <input
        className="checkout__input"
        type="text"
        placeholder="city"
        value={addAddress.city}
        onChange={(e) => setAddAddress({ ...addAddress, city: e.target.value })}
      />
      <div>
        <label className="checkout__label">State</label>
      </div>
      <input
        className="checkout__input"
        type="text"
        placeholder="state"
        value={addAddress.states}
        onChange={(e) =>
          setAddAddress({ ...addAddress, states: e.target.value })
        }
      />
      <div>
        <label className="checkout__label">Zip Code</label>
      </div>
      <input
        className="checkout__input"
        type="text"
        placeholder="zipcode"
        value={addAddress.zipcode}
        onChange={(e) =>
          setAddAddress({ ...addAddress, zipcode: e.target.value })
        }
      />
      <div className="checkout__button">
        <button className="checkout__back" onClick={() => setAddAddress(false)}>
          Cancel
        </button>
        <button className="checkout__next" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </div>
  );
}
