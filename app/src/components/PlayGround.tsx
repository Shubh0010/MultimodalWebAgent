import PlayIcon from "./icons/PlayIcon"

export const PlayGorund = () => {

  return <div className="w-full md:w-2/3 bg-gray-200 p-6 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4 max-w-2xl w-full">
      <div className="flex items-center justify-between">
        <PlayIcon className="h-8 w-8 text-gray-600" />
        <h1 className="text-3xl font-bold">Playground</h1>
        <div />
      </div>
      <div className="text-gray-600">
        <p className='p-4'>Your live preview will start here. To get started:</p>
        <div className="space-y-2">
          <div className="bg-gray-100 rounded-lg p-4">
            <span className="list-decimal pr-2">1.</span>
            Type in a query or choose one of the examples on the chat interface to get started
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <span className="list-decimal pr-2">2.</span>
            We support some websites that require authentication, in which a login button will appear
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <span className="list-decimal pr-2">3.</span>
            You may interact with the screen to take over control or correct the agent
          </div>
        </div>
      </div>
    </div>
  </div>
}