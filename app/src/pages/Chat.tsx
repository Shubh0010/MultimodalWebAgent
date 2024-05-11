import { PlayGorund } from "../components/PlayGround"
import { QueryBox } from "../components/QueryBox"


export const Chat = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <QueryBox/>
      <PlayGorund/>
    </div>
  )
}