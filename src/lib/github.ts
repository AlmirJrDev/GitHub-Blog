// src/api/github.ts
import api from "./axios";

// Tipos para os dados esperados da API do GitHub
export interface User {
  login: string;
  name: string;
  html_url: string;
  bio: string;
  followers: number;
  company: string;
  avatar_url: string;
}

export const getUser = async (username: string): Promise<User> => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};

export interface SearchResult<T> {
  total_count: number;
  incomplete_results: boolean;
  items: T[];
}

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  owner: {
    login: string;
  };
}

export interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  html_url: string;
  created_at: string;
  comments: string;
  user: {
    login: string;
  };
}

export const searchRepoIssues = async (query: string = ''): Promise<SearchResult<Issue>> => {
  const owner = 'AlmirJrDev';
  const repo = 'GitHub-Blog';
  const response = await api.get(`/search/issues?q=${query}+repo:${owner}/${repo}`);
  return response.data;
};

// Adicionar o método getIssue
export const getIssue = async (issueNumber: string): Promise<Issue> => {
  const owner = 'AlmirJrDev';
  const repo = 'GitHub-Blog';
  const response = await api.get(`/repos/${owner}/${repo}/issues/${issueNumber}`);
  return response.data;
};
