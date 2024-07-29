

import Logo from '/logo.svg';

import Github from "/github.svg"
import { useEffect, useState } from 'react';
import { getUser, User, Issue, SearchResult, searchRepoIssues } from '../../lib/github';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
// Estender o tipo Issue para incluir createdAtDistance
interface ExtendedIssue extends Issue {
  createdAtDistance: string;
}

export function Post() {
  const username = "AlmirJrDev";  
  const [issues, setIssues] = useState<ExtendedIssue[]>([]);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const userData = await getUser(username);
          setUser(userData);
        } catch (err) {
          setError('');
        } finally {
          setLoading(false);
        }
      };
  
      fetchUser();
    }, [username]);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    useEffect(() => {
      const fetchIssues = async () => {
        setLoading(true);
        setError(null);
        try {
          const result: SearchResult<Issue> = await searchRepoIssues(query);
          const formattedIssues = result.items.map((issue) => ({
            ...issue,
            createdAtDistance: formatDistanceToNow(parseISO(issue.created_at), { locale: ptBR }),
          })) as ExtendedIssue[]; // <-- Informar TypeScript que agora createdAtDistance existe
          setIssues(formattedIssues);
        } catch (err) {
          setError('Error fetching issues');
        } finally {
          setLoading(false);
        }
      };
  
      fetchIssues();
    }, [query]);
  

  return (
    <>
      <header className="justify-center items-center flex mb-12">
        <div className="flex flex-col items-center">
          <img src={Logo} className="w-30 mt-8" alt="" />
          <div className="rounded-md mt-14 pl-2 bg-baseProfile w-[864px] h-[168px] flex justify-between">
              <div className="p-4 flex flex-col ">
                
             
         
             
                <div className=''>
                <a href="" className='ml-4 font-semibold text-xs uppercase text-blue flex items-center justify-center w-1'>Voltar</a>  
                  <h2 className="text-baseTitle font-semibold text-2xl">
                    {issues}
                  </h2>
                </div>
                <div className="text-baseText gap-4 flex ">
                  <div className="flex gap-2">
                    <img src={Github}alt="" />
                    <span>{user?.login}</span>
                  </div>
                  <div className="flex gap-2">
                    <img src="" alt="" />
                    <span>{}</span>
                  </div>
                  <div className="flex gap-2">
                    <img src="" alt="" />
                    <span>{} seguidores</span>
                  </div>
                </div>
              </div>  
              <div className='p-4'>
                <a href="" className=' -semibold text-xs uppercase text-blue flex items-center justify-center gap-2'>Github</a>
              </div>
          </div>
        </div>
      </header>
     
    </>
  );
}
