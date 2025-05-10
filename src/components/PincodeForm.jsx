import React from "react";

const PincodeForm = ({ pincode, setPincode, handleSearch }) => {
  return (
    <div className="form-section">
      <h2>Enter Pincode</h2>
      <input
        type="text"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        placeholder="Pincode"
        maxLength="6"
      />
      <button onClick={handleSearch}>Lookup</button>
    </div>
  );
};

export default PincodeForm;
