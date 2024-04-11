import React, { useState, useEffect } from "react";
import axios from "axios";

const PickUpLocation = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(`/api/suggestions?q=${inputValue}`);
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    if (inputValue.trim().length > 2) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter pick-up location"
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PickUpLocation;
