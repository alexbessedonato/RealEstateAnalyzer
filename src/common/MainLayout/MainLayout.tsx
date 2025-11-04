import { MainLayoutHeader } from './MainLayoutHeader/MainLayoutHeader';
import { MainLayoutMain } from './MainLayoutMain/MainLayoutMain';
import { MainLayoutFooter } from './MainLayoutFooter/MainLayoutFooter';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <MainLayoutHeader />
      <MainLayoutMain />
      <MainLayoutFooter />
    </div>
  );
};