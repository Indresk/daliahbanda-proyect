export function createApiClient(getToken, refreshToken, logout) {
  return async function apiFetch(url, options = {}) {
    let token = getToken();

    let response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      credentials: "include",
    });

    if (response.status === 401) {
      try {
        await refreshToken();
        token = getToken();

        response = await fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            Authorization: token ? `Bearer ${token}` : undefined,
          },
          credentials: "include",
        });
      } catch (err) {
        logout();
      }
    }
    return response;
  };
}
