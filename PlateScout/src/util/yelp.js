// src/util/yelp.js

const BASE = import.meta.env.VITE_API_URL ?? "";
const SEARCH_PATH = `${BASE}/api/yelp/businesses/search`;

async function searchBusinesses(term, location, sortBy) {
  // Create URL search parameters using term, location, sort_by, and limit
  const params = new URLSearchParams({
    term,
    location,
    sort_by: sortBy,
    limit: "20",
  });

  // Send a fetch request to the Yelp backend search endpoint
  const url = `${SEARCH_PATH}?${params}`;
  console.log('[yelp] requesting:', url);
  const res = await fetch(url);
  // Check if the response failed and throw an error if needed
  if (!res.ok) {
    const body = await res.text();
    console.error('[yelp] error body:', body);
    throw new Error(`Yelp request failed (${res.status}): ${body}`);
  }

  // Convert the response to JSON
  const data = await res.json();

  // Return the businesses array mapped into the format used by the Business component
  return data.businesses.map((biz) => ({
    id: biz.id,
    imageSrc: biz.image_url,
    name: biz.name,
    address: biz.location.address1,
    city: biz.location.city,
    state: biz.location.state,
    zipCode: biz.location.zip_code,
    category: biz.categories[0]?.title ?? '',
    rating: biz.rating,
    reviewCount: biz.review_count,
  }));
}

export default searchBusinesses;
