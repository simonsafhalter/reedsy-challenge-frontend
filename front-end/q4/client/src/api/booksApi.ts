import axios from "axios";

const BASE_URL = "http://localhost:3000/books";

/**
 * Fetches all books from the API.
 *
 * @returns {Promise<Book[] | string>} A promise that resolves to an array of Book objects if the request is successful, or a string error message if an error occurs.
 */
export async function getAllBooks(): Promise<Book[] | string> {
  try {
    const response = await axios.get<Book[]>(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching all books:", error.message);
      return `Error: ${error.message}`;
    } else {
      console.error("Unexpected error:", error);
      return "An unexpected error occurred";
    }
  }
}

/**
 * Fetches a single book by its slug from the API.
 *
 * @param {string} slug - The slug of the book to fetch.
 * @returns {Promise<Book | string>} A promise that resolves to a Book object if the request is successful, or a string error message if an error occurs.
 */
export async function getBookBySlug(slug: string): Promise<Book | string> {
  try {
    const response = await axios.get<Book>(`${BASE_URL}/${slug}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(`Error fetching book with slug ${slug}:`, error.message);
      return `Error: ${error.message}`;
    } else {
      console.error("Unexpected error:", error);
      return "An unexpected error occurred";
    }
  }
}
