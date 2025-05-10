import React from "react";

const PostOfficeCard = ({ office }) => {
  return (
    <div className="card">
      <p><strong>Name:</strong> {office.Name}</p>
      <p><strong>Branch Type:</strong> {office.BranchType}</p>
      <p><strong>Delivery Status:</strong> {office.DeliveryStatus}</p>
      <p><strong>District:</strong> {office.District}</p>
      <p><strong>Division:</strong> {office.Division}</p>
    </div>
  );
};

export default PostOfficeCard;
