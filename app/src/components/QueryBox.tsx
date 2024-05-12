import CandlestickChartIcon from "./icons/CandlestickChartIcon"
import CloudIcon from "./icons/CloudIcon"
import GithubIcon from "./icons/GithubIcon"
import InfoIcon from "./icons/InfoIcon"
import MenuIcon from "./icons/MenuIcon"
import MicIcon from "./icons/MicIcon"
import startOverImage from '../assets/start-over.png';
import playImage from '../assets/play.webp';
import playNextImage from '../assets/next.webp';

export const QueryBox = () => {

  return <div className="w-full md:w-1/3 bg-white p-6 space-y-4 flex flex-col justify-between">

    <div className="space-y-4">
      <div className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg hover:cursor-pointer hover:bg-slate-200">
        <CloudIcon className="h-6 w-6 text-gray-600" />
        <div className="flex flex-col">
          <span className="font-medium">Add the book Zero to One</span>
          <span className="text-sm text-gray-500">in my Amazon cart</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg hover:cursor-pointer hover:bg-slate-200">
        <GithubIcon className="h-6 w-6 text-gray-600" />
        <div className="flex flex-col">
          <span className="font-medium">What's the top post</span>
          <span className="text-sm text-gray-500">on Hackernews</span>
        </div>

      </div>
      <div className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg hover:cursor-pointer hover:bg-slate-200">
        <MenuIcon className="h-6 w-6 text-gray-600" />
        <div className="flex flex-col">
          <span className="font-medium">Reserve a table at Fogo de Chão</span>
          <span className="text-sm text-gray-500">in San Jose for 2 people via OpenTable</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 p-4 bg-gray-100 rounded-lg hover:cursor-pointer hover:bg-slate-200">
        <CandlestickChartIcon className="h-6 w-6 text-gray-600" />
        <div className="flex flex-col">
          <span className="font-medium">How much did NVIDIA stock</span>
          <span className="text-sm text-gray-500">gain today?</span>
        </div>
      </div>
    </div>

    <div className='space-y-4'>
      <div className="mt-4" />
      <div className="flex items-center space-x-4 rounded-lg border border-gray-300 px-4 py-2">
        <input className="flex-1" placeholder="Write a command..." />
        <MicIcon className="h-6 w-6 text-gray-600 hover:cursor-pointer" />
        <InfoIcon className="h-6 w-6 text-gray-600 hover:cursor-pointer" />
      </div>
      <div className="flex justify-between mx-48">
        <button>
          <img src={startOverImage} alt="start-over" className='max-h-10' />
        </button>

        <button>
          <img src={playImage} alt="start-over" className='max-h-10' />
        </button>
        <button>
          <img src={playNextImage} alt="start-over" className='max-h-10' />
        </button>
      </div>
    </div>
  </div>
}