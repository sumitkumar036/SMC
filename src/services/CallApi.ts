import { toast } from "react-toastify";

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}

/**
 * Generic API caller
 * @param endpoint - API URL
 * @param action - Action type (e.g. "member", "login", etc.)
 * @param type - Specific type (e.g. "add", "update", "delete", etc.)
 * @param params - Key-value parameters to send
 * @returns API response data or null on failure
 */
export const callApi = async <T = any>(
  endpoint: string,
  action: string,
  type: string,
  params: Record<string, string | number | boolean> = {}
): Promise<T | null> => {
  try {
    const body = new URLSearchParams({
      Action: action,
      Type: type,
      ...Object.fromEntries(
        Object.entries(params).map(([key, value]) => [key, String(value)])
      )
    }).toString();

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body
    });

    const result: ApiResponse<T> = await response.json();

    if (result.success) {
      return result.data ?? null;
    } 
    else {
      toast.error(result.message || "API error");
      return null;
    }
  } catch (err) {
    console.error("API call error:", err);
    return null;
  }
};
