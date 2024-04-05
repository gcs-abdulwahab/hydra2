import { BeakerIcon } from '@heroicons/react/24/solid';

function MyComponent() {
  return (
    <div>
      <BeakerIcon className="w-6 h-6 text-blue-500" />
      <p>...</p>
    </div>
  );
}
const home2 = () => {
  return (
    <div className="grid grid-cols-3 p-5 rounded-lg gap-x-1 gap-y-4 bg-zinc-200 justify-evenly">
    <div className="col-span-1"><Card /></div>
    <div className="col-span-1"><Card /></div>
    <div className="col-span-1"><Card /></div>
    <div className="col-span-1"><Card /></div>
    <div className="col-span-1"><Card /></div>
    <div className="col-span-1"><Card /></div>
  </div>
  );
};

const Card = () => {
  return (
    <div className="flex flex-wrap p-2 bg-green-400 rounded-sm shadow-lg w-96">
      <div className="w-full p-2 bg-red-300 border-b border-solid ">
        <span className="mr-2 font-bold">Jane Cooper</span>
        <span className="px-2 bg-yellow-400 rounded-full"> Admin</span>
        <span className="block text-sm"> Segional Paradigm Technician</span>
      </div>
      <div className="flex items-center justify-center p-2 bg-red-300 border-r border-solid grow">
        <BeakerIcon className="w-6 h-6 text-blue-500" /> <span>Email</span>
      </div>
      <div className="flex items-center justify-center p-2 bg-red-300 border-r border-solid grow">
        <BeakerIcon className="w-6 h-6 text-blue-500" /> <span>Email</span>
      </div>
    </div>
  );
};

export default home2;
