import Feed from "./Feed.js"
const Home = ( {posts} ) => {
  console.log(posts.length)
    return (
      <main className="Home">
        
          {posts.length ? (
            <Feed posts = {posts} />
          ) : (
            <p style={{ marginTop: "2rem"}}>
              No post to display.
            </p>
          )}
      </main>
    )
  }
  
  export default Home