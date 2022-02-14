// Imports
// ========================================================
import { BrowserRouter } from 'react-router-dom';
import QueryProvider from './query';

// RootProvider
// ========================================================
const RootProvider: React.FC = ({ children }) => {
  return <div>
    <BrowserRouter>
      <QueryProvider>
        {children}
      </QueryProvider>
    </BrowserRouter>
  </div>
};

// Exports
// ========================================================
export default RootProvider;