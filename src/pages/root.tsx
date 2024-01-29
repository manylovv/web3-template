import { Header } from '@/components/shared/header';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';

export const RootPage = () => {
  return (
    <div>
      <div className="min-h-screen mx-auto px-4 sm:px-8 md:px-16 xl:px-32 2xl:max-w-7xl 2xl:px-0">
        <Header />

        {/* Height of the header is 72px, so we need to subtract it from the height of the page. */}
        <div className="min-h-[calc(100vh-72px)] flex flex-col items-center">
          <Outlet />
        </div>

        <Toaster />
      </div>
    </div>
  );
};
