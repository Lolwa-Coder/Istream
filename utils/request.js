const API_KEY = process.env.API_KEY;
export default{
    fetchTrending:{
        title:'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:'Top Rated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title:'Action',
        url:`/discover/movie?api_key=${API_KEY}&with_genre=28`
    },
    fetchComedyMovies:{
        title:'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_genre=35`
    },
    fetchHorrorMovies:{
        title:'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_genre=27`
    }
}