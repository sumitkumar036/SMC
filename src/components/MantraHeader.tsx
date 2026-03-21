const Swastika = () => (
  <div className="relative inline-flex items-center justify-center w-8 h-8">
    <span className="text-3xl leading-none select-none">卐</span>
    {/* Precisely positioned dots for the four quadrants */}
    <span className="absolute top-[28%] left-[28%] w-[2.5px] h-[2.5px] bg-current rounded-full"></span>
    <span className="absolute top-[28%] right-[28%] w-[2.5px] h-[2.5px] bg-current rounded-full"></span>
    <span className="absolute bottom-[28%] left-[28%] w-[2.5px] h-[2.5px] bg-current rounded-full"></span>
    <span className="absolute bottom-[28%] right-[28%] w-[2.5px] h-[2.5px] bg-current rounded-full"></span>
  </div>
);

const MantraHeader = () => {
  return (
    <div className="flex justify-center items-center gap-2 md:gap-4 font-bold text-lg md:text-xl py-6 tracking-widest text-red-800 dark:text-red-200">
      <span className="text-2xl">॥</span>
      <Swastika />
      <span className="text-2xl">॥</span>
      
      <span className="mx-2 md:mx-4 whitespace-nowrap">श्री गणेशाय नम:</span>
      
      <span className="text-2xl">॥</span>
      <Swastika />
      <span className="text-2xl">॥</span>
    </div>
  );
};

export default MantraHeader;