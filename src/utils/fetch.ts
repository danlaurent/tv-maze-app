export const fetchService = async <T>(url: string): Promise<T> => {
  try {
    const data = await fetch(url);
    const response = await data.json();
    return response;
  } catch (error) {
    throw error;
  }
};
