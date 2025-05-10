import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import PincodeForm from "./components/PincodeForm";
import PostOfficeList from "./components/PostOfficeList";
import Loader from "./components/Loader";

function App() {
  const [pincode, setPincode] = useState("");
  const [postOffices, setPostOffices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState("");

  const handleSearch = async () => {
    if (pincode.length !== 6 || !/^\d+$/.test(pincode)) {
      toast.error("Please enter a valid 6-digit pincode!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = response.data[0];

      if (data.Status === "Success") {
        setPostOffices(data.PostOffice);
        toast.success(`Found ${data.PostOffice.length} post offices`);
      } else {
        setPostOffices([]);
        toast.error("Invalid Pincode or no data found.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const filtered = postOffices.filter((po) =>
    po.Name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="app-container">
      <ToastContainer />
      <PincodeForm
        pincode={pincode}
        setPincode={setPincode}
        handleSearch={handleSearch}
      />
      {loading ? (
        <Loader />
      ) : (
        postOffices.length > 0 && (
          <PostOfficeList
            pincode={pincode}
            postOffices={filtered}
            filterText={filterText}
            setFilterText={setFilterText}
          />
        )
      )}
      {!loading && postOffices.length > 0 && filtered.length === 0 && (
        <p className="no-data">Couldn’t find the postal data you’re looking for…</p>
      )}
    </div>
  );
}

export default App;
