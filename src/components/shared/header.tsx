import { ConnectKitButton } from 'connectkit';

export const Header = () => {
  return (
    <div className="h-[72px] flex justify-between items-center">
      <p className="font-bold text-2xl">App name</p>
      <ConnectKitButton />
    </div>
  );
};
