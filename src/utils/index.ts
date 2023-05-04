const BASE_API_URL =
  import.meta.env.BASE_API_URL || "http://localhost:5050/api";
export const client = ({
  endpoint,
  body = null,
  method = "POST",
  user = null,
}: {
  endpoint: string;
  body?: any;
  method?: string;
  user?: any;
}) => {
  const headers: any = { "Content-Type": "application/json" };
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
  return fetch(`${BASE_API_URL}${endpoint}`, config)
    .then(async (res) => {
      const data = await res.json();
      return data;
    })
    .catch(async (res) => {
      return Promise.reject(res);
    });
};
