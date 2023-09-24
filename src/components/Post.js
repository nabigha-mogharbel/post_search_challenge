export default function Post({post,keyword}){
    function highlight(text){
        if (keyword != "")
        {return <span dangerouslySetInnerHTML={{ __html: text.replace(new RegExp(keyword, "gi"), `<span class="highlight">${keyword}</span>`) }} />;}else{ return text}
    }
    return(
        <div className="post_container">
            <h3>{highlight(post.title)}</h3>
            <p className="post_date">{post.date}</p>
            <p className="post_text">{post.text.length > 200? highlight(`${post.text.slice(0,201)}...`) : highlight(post.text)}</p>
        </div>
    )
}