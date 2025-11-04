export const ScrapeDataButton = () => {
  return (
    <div className="flex flex-col items-center">
      <button 
        type="button" 
        className="text-white bg-gradient-to-r from-cyan-800 to-purple-500 font-medium rounded-2xl text-2xl px-20 py-6 text-center"
      >
        🔗 Scrape Data from URL
      </button>
      <div className="flex flex-col items-center mt-5 text-gray-500 text-center">
        <p>Automatically pull key data by pasting a property</p>
        <p>listing URL from idealista.com</p>
      </div>
    </div>
  );
};