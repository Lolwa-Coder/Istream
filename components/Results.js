import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
function Results({results}){
    return(
        <FlipMove className='p-2 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {results.map(result=>(
                <Thumbnail className="w-1" key={result.id} result={result} />
            ))}
        </FlipMove>
    )
}
export default Results;