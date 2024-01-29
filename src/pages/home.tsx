import { useAccount } from 'wagmi';

export const HomePage = () => {
  const { address, isConnecting } = useAccount();

  return (
    <div className="flex-1 w-full">
      <div>Address: {address}</div>
      {isConnecting && <div>Connecting...</div>}
    </div>
  );
};
