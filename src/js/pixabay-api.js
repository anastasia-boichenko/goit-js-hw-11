export default function fetchImages(q) {
  const params = new URLSearchParams({
    key: '45209949-5a312a82ff87c6973b888687f',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
