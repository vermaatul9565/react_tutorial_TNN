const Home = () => {
    const handleClick = () =>{
        console.log('hello, ATUL !!');
    }
    const handleClickAgain = (name) =>{
        console.log('hello', name);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>click</button>
            <button onClick={ ()=>{ handleClickAgain("Mario !!")} }>click again</button>
        </div>
     );
}
 
export default Home;