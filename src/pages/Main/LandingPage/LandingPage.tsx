import { HeroSection } from './HeroSection/HeroSection';
import { ManualEntryButton } from './ManualEntryButton/ManualEntryButton';
import { ScrapeDataButton } from './ScrapeDataButton/ScrapeDataButton';

export const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <div className="flex justify-center items-start space-x-10 mt-14">
        <ManualEntryButton />
        <ScrapeDataButton />
      </div>
    </>
  );
};