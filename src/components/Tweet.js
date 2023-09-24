import Twitter from "./logo.svg"
export default function Tweet({post}){
    return(
        <div className="tweet_container">
            <p><b>bitsofcode.</b> Articles on Forntend Development. All articles are written by <u>Ire Aderinokun</u>, Frontend Developer and User Interface Designer.</p>
            <div className="button_container"><button> <img src={Twitter} alt="twitter_logo" height="10px" width="10px"/> Follow @ireaderkinokun</button><div>19.1k followers</div></div>
        </div>
    )
}