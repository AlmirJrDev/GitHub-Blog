// Blog.tsx
import React, { useState, useEffect } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CardBlog } from '../../components/CardBlog';
import Logo from '/logo.svg';
import { Issue, SearchResult, searchRepoIssues } from '../../lib/github';
import { Link } from 'react-router-dom';

interface ExtendedIssue extends Issue {
  createdAtDistance: string;
}

export function Blog() {
  const [query, setQuery] = useState<string>('');
  const [issues, setIssues] = useState<ExtendedIssue[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIssues = async () => {
      setLoading(true);
      setError(null);
      try {
        const result: SearchResult<Issue> = await searchRepoIssues(query);
        const formattedIssues = result.items.map((issue) => ({
          ...issue,
          createdAtDistance: formatDistanceToNow(parseISO(issue.created_at), { locale: ptBR }),
        })) as ExtendedIssue[];
        setIssues(formattedIssues);
      } catch (err) {
        setError('Error fetching issues');
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, [query]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // A busca já é tratada pelo useEffect
  };

  return (
    <>
      <header className="justify-center items-center flex mb-12">
        <div className="flex flex-col items-center">
          <img src={Logo} className="w-30 mt-8" alt="Logo" />
          <CardBlog />
        </div>
      </header>
      <main className="flex justify-center items-center flex-col mb-12">
        <div className="w-[868px]">
          <div className="flex justify-between mb-4">
            <h3 className="text-baseTitle text-sm font-semibold">Publicações</h3>
            <span className="text-baseText text-xs font-thin">{issues.length} publicações</span>
          </div>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar conteúdo"
              className="h-[50px] p-4 bg-baseInput border rounded-md w-full border-baseBorder text-baseText placeholder:text-baseBorder"
            />
          </form>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-8">
          {issues.map((issue) => (
            <Link to={`/post/${issue.number}`} key={issue.id} className="flex flex-col items-center justify-center w-[416px] bg-basePost rounded-md p-8">
              <div className="flex w-full justify-between items-baseline mb-5">
                <h4 className="text-lg text-baseTitle w-[213px]">{issue.title}</h4>
                <span className="text-xs text-baseSpan">{issue.createdAtDistance}</span>
              </div>
              <div>
                <p className="text-baseText line-clamp-4">{issue.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
