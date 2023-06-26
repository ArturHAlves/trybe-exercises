// src/utils/mapStatusHTTP.ts

export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
  };

  return statusHTTPMap[status] ?? 500;
}