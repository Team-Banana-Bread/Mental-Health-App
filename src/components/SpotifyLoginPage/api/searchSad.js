const apiPrefix = 'https://api.spotify.com/v1';

export default async ({
  token,
}) => {
  const uri = `${apiPrefix}/playlists/37i9dQZF1DX7gIoKXt0gmx`;
  console.log('search begin, uri =', uri, 'token =', token);
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  const json = await res.json();
  console.log('search got json', json);

  if (!res.ok) {
    return [];
  }

  const {
      tracks:{
        items,
    }
  } = json;
  return items.map(item => ({
    songUri: item.track.preview_url,
    id: item.track.id,
    title: item.track.name,
    imageUri: item.track.album.images[0].url,
  }));
  console.log('search end');
};