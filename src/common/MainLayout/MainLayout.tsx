import { MainLayoutHeader } from './MainLayoutHeader/MainLayoutHeader';
import { MainLayoutMain } from './MainLayoutMain/MainLayoutMain';
import { MainLayoutFooter } from './MainLayoutFooter/MainLayoutFooter';

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <MainLayoutHeader />
      <MainLayoutMain />
      <MainLayoutFooter />
    </div>
  );
};