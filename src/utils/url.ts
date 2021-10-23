export const getUrlWithOptions = (url: string, options?: any) => {
  if (options) {
    const params = Object.keys(options)
      .map((key) => `${key}=${options[key]}`)
      .join('&');
    return `${url}?${params}`;
  }
  return url;
};
