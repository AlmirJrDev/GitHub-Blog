import Github from "/github.svg"
import Institute from "/institute.svg"
import Followers from "/followers.svg"
import { ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"
import { User, getUser } from "../lib/github"



export function CardBlog() {

  const username = "AlmirJrDev";  

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const userData = await getUser(username);
          setUser(userData);
        } catch (err) {
          setError('Error fetching user data');
        } finally {
          setLoading(false);
        }
      };
  
      fetchUser();
    }, [username]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <div>{error}</div>;
  return(
    <div className="rounded-md mt-14 bg-baseProfile w-[868px] h-[212px] flex items-center ">
    <div className="p-4 ml-4">
    <img className="rounded-xl object-cover w-52 " src={user?.avatar_url} alt="" />
    </div>
    <div className="p-4 flex flex-col">
      <div className="flex justify-between pb-4">
        <h2 className="text-baseTitle font-semibold text-2xl">
          {user?.name}
        </h2> 
        <a href={user?.html_url} className="font-semibold text-xs uppercase text-blue flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2">
            GitHub 
            <ExternalLink className="size-4 font-semibold "/>
          </div>
        </a>
      </div>
      <div>
        <p className="text-baseText text-sm pb-10">
          {user?.bio}
        </p>
      </div>
      <div className="text-baseText gap-4 flex ">
        <div className="flex gap-2">
          <img src={Github} alt="" />
          <span>{user?.login}</span>
        </div>
        <div className="flex gap-2">
          <img src={Institute} alt="" />
          <span>{user?.company}</span>
        </div>
        <div className="flex gap-2">
          <img src={Followers} alt="" />
          <span>{user?.followers} seguidores</span>
        </div>
      </div>
    </div>  
  </div>
  )
}