// Imports
// ========================================================
import { useEffect, useState } from "react";
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';

// Components
import Loader from "../../components/Loader";
import Nft from "../../components/Nft";

// Types
interface TransactionType {
  blockNum?: string;
  hash?: string;
  from?: string;
  to?: string;
  value?: any,
  erc721TokenId?: string;
  erc1155Metadata?: any;
  tokenId?: string;
  asset?: any;
  category?: string;
  rawContract?: {
    value?: any;
    address?: string;
    decimal?: any;
  }
}

// Page Component
// ========================================================
const ContractPage = () => {
  // State / Props
  const { id } = useParams();
  const [validContractAddress, setValidContractAddress] = useState<string | undefined>();

  // Requests
  const { data, isLoading } = useQuery(['contract', validContractAddress], async () => {
    const result = await fetch(`https://polygon-mumbai.g.alchemy.com/v2/${import.meta.env.VITE_ALCHEMY_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "jsonrpc": "2.0", "method": "alchemy_getAssetTransfers", "params": [{ "fromBlock": "0xff", "contractAddresses": [`${validContractAddress}`], "category": ["erc721", "erc1155"] }] })
    })
    if (result.ok) {
      const json = await result.json();
      return json?.result?.transfers ?? [];
    }
    return [];
  }, {
    enabled: !!validContractAddress
  });

  // Hooks
  useEffect(() => {
    if (!id) return;
    const re = new RegExp('0x[a-fA-F0-9]{40}', 'g');
    const isValid = Array.isArray(id.match(re));
    setValidContractAddress(isValid ? id : undefined);
  }, [id]);

  // Render
  return <div>
    <div className="max-w-7xl mx-auto py-6 px-4">
      <Link className="block text-sm mb-8 text-gray-500 hover:text-blue-600 transition-colors ease-in-out duration-200" to={'/'}>← Back Home</Link>
      <h1 className="text-gray-800 text-2xl font-semibold mb-2">Contract</h1>
      <h2 className="text-gray-500 text-xl mb-4">{id}</h2>
      <div className="mb-8">
        {!data && isLoading ? <Loader /> : <div>
          {!validContractAddress ? <p className="text-red-500 font-semibold">Invalid Contract Address</p> : <div>

            <p className="text-large font-semibold mb-2">Response Result:</p>
            <pre className="bg-gray-100 p-4 max-h-80 overflow-scroll mb-8">
              <code>
                {JSON.stringify(data, null, ' ')}
              </code>
            </pre>

            <p className="text-large font-semibold mb-2">Gallery:</p>
            {data?.length > 0
              ? <div className="flex -mx-4">
                {data.map((nft: Array<TransactionType>) =>
                  <a key={`nft-${parseInt(nft?.tokenId ?? '')}`} className="w-48 p-4 mx-4 block border border-gray-200 rounded overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all ease-in-out duration-200" href={`https://mumbai.polygonscan.com/tx/${nft?.hash}`} target={'_blank'}>
                    <code className=" text-pink-500">{parseInt(nft?.tokenId ?? '')}</code>
                    <Nft contractAddress={nft?.rawContract?.address} tokenId={parseInt(nft?.tokenId ?? '')} tokenType={nft?.erc721TokenId ? 'ERC721' : 'ERC1155'} />
                  </a>)}
              </div>
              : <div>
                <p className="text-large font-semibold mb-2">No NFTs found</p>
              </div>}
          </div>}
        </div>}
      </div>
    </div>
  </div>
};

// Exports
// ========================================================
export default ContractPage;