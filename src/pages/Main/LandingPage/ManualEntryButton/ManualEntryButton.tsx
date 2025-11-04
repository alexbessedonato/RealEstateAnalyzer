export const ManualEntryButton = () => {
  return (
    <div className="flex flex-col items-center">
      <button 
        type="button" 
        className="text-white bg-gradient-to-r from-gray-500 to-gray-800 font-medium rounded-2xl text-2xl px-20 py-6 text-center"
      >
        ⌨️ Enter Data Manually
      </button>
      <div className="flex flex-col items-center mt-5 text-gray-500 text-center">
        <p>Input property price, rental income, and expenses</p>
        <p>into our guided form</p>
      </div>
    </div>
  );
};