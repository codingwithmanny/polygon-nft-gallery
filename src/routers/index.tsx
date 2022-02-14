// Imports
// ========================================================
import { Routes, Route } from 'react-router-dom';

// Pages
import HomePage from '../pages/Home';
import ContractPage from '../pages/Contract';

// Main Router
// ========================================================
const RootRouter = () => {
  return <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contract/:id" element={<ContractPage />} />
    </Routes>
  </div>
};

// Exports
// ========================================================
export default RootRouter;
