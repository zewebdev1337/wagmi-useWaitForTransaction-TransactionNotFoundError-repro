import { useAccount } from 'wagmi';

import { Account, Connect, NetworkSwitcher } from './components';
import { MintNFT } from './Mint';

export function App() {
  const { isConnected } = useAccount();

  return (
    <>
      <h1>wagmi</h1>

      <Connect />

      {isConnected && (
        <>
          <Account />
          <MintNFT />
          <NetworkSwitcher />
        </>
      )}
    </>
  );
}
