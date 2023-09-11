import ScrollView from "./ScrollView";

const Home = () => {

    const trendingSection = [
        {id: 'all', tab: 'All', url: 'https://api.themoviedb.org/3/trending/all/day?language=en-US'},
        {id: 'movie', tab: 'Movies', url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'},
        {id: 'tv', tab: 'TV Shows', url: 'https://api.themoviedb.org/3/trending/tv/day?language=en-US'}
    ]

    const popularSection = [
        {id: 'movie', tab: 'Movies', url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'},
        {id: 'tv', tab: 'On TV', url: 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'}
    ]

    return ( 
        <>
            <ScrollView section={popularSection} scrollViewTitle={`What's Popular`}/>
            <ScrollView section={trendingSection} scrollViewTitle={`Trending`}/>
        </>
     );
}
 
export default Home;