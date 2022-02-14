// Imports
// ========================================================
import { useQuery } from 'react-query';

// Components
import Loader from '../Loader';

// Main Component
// ========================================================
const Nft: React.FC<{ contractAddress: string, tokenId: number; type: string; }> = ({ contractAddress, tokenId, type }) => {
  // Requests
  const { data, isLoading } = useQuery(['nft', contractAddress, tokenId, type], async () => {
    const result = await fetch(`https://polygon-mumbai.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_API}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}&tokenType=${type}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    if (result.ok) {
      const json = await result.json();
      const meta: any = await fetch(json.tokenUri.raw).then(data => data.json());
      return meta;
    }
    return null;
  })

  // Render
  return <div className="block w-full">
    {isLoading ?
      <Loader />
      : data ? <img className="block w-full" src={data?.image} /> : <span>Could not load image</span>}
  </div>
};

// Exports
// ========================================================
export default Nft;

