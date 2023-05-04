export const client = ({ endpoint, body = null, method = 'POST', user = null }: { endpoint: string, body?: any, method?: string, user?: any }) => {

    const headers: any = { 'Content-Type': 'application/json' };
    if (user && user.token) {
        headers.Authorization = `Bearer ${user.token}`;
    }
    const config: any = {
        method,
        headers: {
            ...headers,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    return fetch(`${import.meta.env.NEXT_PUBLIC_API_URL}${endpoint}`, config)
        .then(async (res) => {
            if (res?.status === 404) return;
            const data = await res.json();
            if (res.ok) {
                return data;
            } else {
                return Promise.reject(data);
            }
        })
        .catch(async (res) => {
            return Promise.reject(res);
        });
};