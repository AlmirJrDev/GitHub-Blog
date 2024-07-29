// Post.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser, getIssue, User, Issue } from '../../lib/github';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Logo from '/logo.svg';
import Github from "/github.svg";

interface ExtendedIssue extends Issue {
  createdAtDistance: string;
}

export function Post() {
  const { issueNumber } = useParams<{ issueNumber: string }>();
  const [issue, setIssue] = useState<ExtendedIssue | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!issueNumber) {
        setError('Invalid issue number');
        setLoading(false);
        return;
      }
      
      setLoading(true);
      setError(null);
      try {
        const issueData = await getIssue(issueNumber); // Fetch issue data using the issue number
        const userData = await getUser(issueData.user.login);
        setIssue({
          ...issueData,
          createdAtDistance: formatDistanceToNow(parseISO(issueData.created_at), { locale: ptBR }),
        });
        setUser(userData);
      } catch (err) {
        setError('Error loading data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [issueNumber]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <header className="justify-center items-center flex mb-12">
        <div className="flex flex-col items-center">
          <img src={Logo} className="w-30 mt-8" alt="Logo" />
          <div className="rounded-md mt-14 pl-2 bg-baseProfile w-[864px] h-[168px] flex justify-between">
            <div className="p-4 flex flex-col">
              <div className=''>
                <a href="/" className='ml-4 font-semibold text-xs uppercase text-blue flex items-center justify-center w-1'>Voltar</a>  
                <h2 className="text-baseTitle font-semibold text-2xl">{issue?.title}</h2>
                <p className="text-baseText">{issue?.body}</p>
              </div>
              <div className="text-baseText gap-4 flex">
                <div className="flex gap-2">
                  <img src={Github} alt="Github" />
                  <span>{user?.login}</span>
                </div>
                <div className="flex gap-2">
                  <img src="" alt="" />
                  <span>{user?.followers} seguidores</span>
                </div>
              </div>
            </div>  
            <div className='p-4'>
              <a href={user?.html_url} className='font-semibold text-xs uppercase text-blue flex items-center justify-center gap-2'>Github</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
