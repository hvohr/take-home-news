async function allBusiness() {
  const response = await fetch("https://newsapi.org/v2/top-headlines?category=business&apiKey=33a2161beece4720940a9f191b2914bd")
  if (!response.ok) {
    throw new Error(response.status)
  }
  const data = await response.json()
  return data
}

"https://newsapi.org/v2/top-headlines?category=business&apiKey=33a2161beece4720940a9f191b2914bd"