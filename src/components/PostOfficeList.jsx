import React from "react";
import PostOfficeCard from "./PostOfficeCard";

const PostOfficeList = ({ pincode, postOffices, filterText, setFilterText }) => {
  return (
    <div className="results-section">
      <h3><strong>Pincode:</strong> {pincode}</h3>
      <p><strong>Message:</strong> Number of pincode(s) found:</p>

      <input
        type="text"
        placeholder="🔍 Filter"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <div className="card-grid">
        {postOffices.map((office, index) => (
          <PostOfficeCard key={index} office={office} />
        ))}
      </div>
    </div>
  );
};

export default PostOfficeList;
