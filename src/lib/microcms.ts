import { createClient, type MicroCMSListResponse, type MicroCMSQueries } from "microcms-js-sdk";

export type News = {
  id: string;
  title: string;
  category?: string[];
  content: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  revisedAt?: string;
};

export type NewsListResponse = MicroCMSListResponse<News>;

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

const client =
  serviceDomain && apiKey ? createClient({ serviceDomain, apiKey }) : null;

const emptyList: NewsListResponse = { contents: [], totalCount: 0, offset: 0, limit: 0 };

export const isMicroCmsConfigured = (): boolean => client !== null;

export const getNewsList = async (queries?: MicroCMSQueries): Promise<NewsListResponse> => {
  if (!client) {
    if (import.meta.env.DEV) {
      console.warn(
        "[microCMS] MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY が未設定のため、ニュース一覧を空で返します。",
      );
    }
    return emptyList;
  }
  return client.getList<News>({ endpoint: "news", queries });
};

export const getNewsDetail = (contentId: string, queries?: MicroCMSQueries) => {
  if (!client) {
    throw new Error(
      "microCMS の環境変数が未設定です。.env に MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を設定してください。",
    );
  }
  return client.getListDetail<News>({ endpoint: "news", contentId, queries });
};

export const formatPublishedAt = (iso?: string): string => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}/${m}/${day}`;
};

export const getCategoryLabel = (category?: News["category"]): string | null => {
  if (!category || category.length === 0) return null;
  return category[0] ?? null;
};

export const stripHtml = (html: string, max = 120): string => {
  const text = html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > max ? text.slice(0, max) + "…" : text;
};
