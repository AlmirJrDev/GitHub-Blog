import Github from "/github.svg"
import Institute from "/institute.svg"
import Followers from "/followers.svg"
import { ExternalLink } from "lucide-react"

export function CardBlog() {
  return(
    <div className="rounded-md mt-14 bg-baseProfile w-[868px] h-[212px] flex items-center ">
    <div className="p-4 ml-4">
    <img className="rounded-xl object-cover w-58 " src="https://github.com/AlmirJrDev.png" alt="" />
    </div>
    <div className="p-4 flex flex-col">
      <div className="flex justify-between pb-4">
        <h2 className="text-baseTitle font-semibold text-2xl">
          Almir Junior Araujo Gomes
        </h2> 
        <a href="" className="font-semibold text-xs uppercase text-blue flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2">
            GitHub 
            <ExternalLink className="size-4 font-semibold "/>
          </div>
        </a>
      </div>
      <div>
        <p className="text-baseText text-sm pb-10">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. 
          Eu viverra massa quam dignissim aenean malesuada suscipit. 
          Nunc, volutpat pulvinar vel mass.
        </p>
      </div>
      <div className="text-baseText gap-4 flex ">
        <div className="flex gap-2">
          <img src={Github} alt="" />
          <span>almirjrdev</span>
        </div>
        <div className="flex gap-2">
          <img src={Institute} alt="" />
          <span>Rocketseat</span>
        </div>
        <div className="flex gap-2">
          <img src={Followers} alt="" />
          <span>64 Seguidores</span>
        </div>
      </div>
    </div>  
  </div>
  )
}