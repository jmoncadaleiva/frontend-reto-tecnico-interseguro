import { useAuthStore } from "@/stores/auth";

const API_URL = import.meta.env.VITE_BASE_URL

export const baseFetch = async (
    url: string,
    method = 'get',
    body?: object | FormData,
    headers = {}
) => {
    try {
        const authStore = useAuthStore()
        if (authStore.isAuthenticated) {
            headers = {
                ...headers,
                'Authorization': 'Bearer ' + authStore.token
            }
        }

        if (!(body instanceof FormData)) {
            headers = {
                ...headers,
                'Content-Type': 'application/json'
            }
        }

        const res = await fetch(`${API_URL}${url}`, {
            method: method.toUpperCase(),
            body: body instanceof FormData ? body : JSON.stringify(body),
            mode: 'cors',
            headers
        });
        if (!res.ok) {
            const error = await res.json();
            return Promise.reject(error);
        }
        return await res.json();
    } catch (err) {
        throw { error: err };
    }
}