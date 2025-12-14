import { getAuthToken } from "@dynamic-labs/sdk-react-core";

export class HttpError extends Error {
  status: number;
  body: unknown;

  constructor(status: number, message: string, body?: unknown) {
    super(message);
    this.status = status;
    this.body = body;
  }
}

type Json = Record<string, unknown> | unknown[] | string | number | boolean | null;

export async function api<T>(
  path: string,
  opts: RequestInit & { json?: Json } = {}
): Promise<T> {
  const baseUrl = import.meta.env.VITE_PUBLIC_API_URL;
  if (!baseUrl) throw new Error("Missing environnement VITE_PUBLIC_API_URL");

  const headers = new Headers(opts.headers);

  let body: BodyInit | undefined = opts.body as any;
  if (opts.json !== undefined) {
    headers.set("Content-Type", "application/json");
    body = JSON.stringify(opts.json);
  }

  if (typeof window !== "undefined") {
    const token = getAuthToken();
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(`${baseUrl}${path}`, {
    ...opts,
    headers,
    body,
    credentials: "include", // IMPORTANT: envoie les cookies (dynamic-jwt)
  });

  const contentType = res.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");

  const data = (isJson ? await res.json() : await res.text()) as unknown;

  if (!res.ok) {
    const message =
      typeof data === "object" && data && "error" in (data as any)
        ? String((data as any).error)
        : `HTTP ${res.status}`;
    throw new HttpError(res.status, message, data);
  }

  return data as T;
}
