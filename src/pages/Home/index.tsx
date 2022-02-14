// Imports
// ========================================================
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

// Page Component
// ========================================================
const HomePage = () => {
  // State / Props
  const [contractAddress, setContractAddress] = useState('0x11f5db31cbadde6eeb8b341c96fa4897c09b4efd');
  const navigate = useNavigate();

  // Functions
  /**
   *
   * @param event
   */
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContractAddress(event.target.value);
  };

  /**
   *
   * @param event
   */
  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/contract/${contractAddress}`);
  };


  // Render
  return <div>
    <div className="max-w-7xl mx-auto py-6 px-4">
      <h1 className="text-gray-800 text-2xl font-semibold mb-4">NFT Collections</h1>
      <div className="mb-8">
        <form onSubmit={onFormSubmit}>
          <div className="mb-4">
            <label className="text-gray-500 block mb-2" htmlFor="contract">Contract Address</label>
            <input placeholder="0x0000000000000000000000000000000000001004" className="border rounded border-gray-300 h-10 w-full px-4" type="text" onChange={onChangeInput} value={contractAddress} />
          </div>
          <div>
            <button className="h-10 rounded bg-gray-800 text-white px-8" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
};

// Exports
// ========================================================
export default HomePage;