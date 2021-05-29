export const fetchMovies = async (searchMovies: string, id?: string, year?: string, page?: number) => {
    const response = await 
      fetch(!id ? 
        `http://www.omdbapi.com/?s=${searchMovies}&apikey=b9667616&r=json&${year ? `y=${year}` : ""}${page ? `&page=${page}` : ""}` : 
        'http://www.omdbapi.com/?apikey=b9667616&i=tt3896198&t='+ searchMovies)
        const result = await response.json()
          return result
   }


export const getMovies =async (searchMovies: string, year?: string, page?: number) => {
    const movies = await fetchMovies(searchMovies, undefined, year, page)
    return movies
}

export const getUniqueMovie = async (searchMovies: string) => {
    const movie = await fetchMovies(searchMovies, "true")
    return movie

}