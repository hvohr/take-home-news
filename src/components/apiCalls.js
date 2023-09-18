const getAllArticles = async () => {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=33a2161beece4720940a9f191b2914bd')
  if (!response.ok) {
    throw new Error(response.status)
  }
  const data = await response.json()
  return data
}

const getSpecificCategory = async (category) => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=33a2161beece4720940a9f191b2914bd`)
  if (!response.ok) {
    throw new Error(response.status)
  }
  const data = await response.json()
  return data
}

export { getAllArticles, getSpecificCategory }

