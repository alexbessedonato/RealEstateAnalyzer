import CashFlowLogo from '../../../../public/CashFlowLogo.png';


export const MainLayoutHeader = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center space-x-2 text-2xl font-bold">
        <img src={CashFlowLogo} alt="Logo" className="h-20" />
        <span>Cash Flow Analyzer</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <span>Help</span>
        <span>About</span>
        <span>Profile</span>
      </div>
    </header>
  );
};