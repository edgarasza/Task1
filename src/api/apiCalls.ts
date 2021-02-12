export const giphySearch = async (keyword: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${keyword}&&api_key=BXYqtaUAb28STISpyyA4BiWaM1Zf1WJQ&limit=12`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const data = await response.json();
  return data;
};

export const giphySearchByID = async (id: string) => {
  const url = `https://api.giphy.com/v1/gifs/${id}?&api_key=BXYqtaUAb28STISpyyA4BiWaM1Zf1WJQ`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const data = await response.json();
  return data;
};

export const giphySearchOffset = async (keyword: string, offset: number) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${keyword}&&api_key=BXYqtaUAb28STISpyyA4BiWaM1Zf1WJQ&limit=12&offset=${offset}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const data = await response.json();
  return data;
};
