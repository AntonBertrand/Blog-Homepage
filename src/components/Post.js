export default function Post(props) {
    return (
        <div className="Post">
            <img src={props.item.image}></img>
            <p className="post-category">{props.item.category}</p>
            <h3 className="post-title">{props.item.title}</h3>
            <p className="post-desc">{props.item.description}</p>
            <p className="post-author">{props.item.author}</p>
        </div>
    )
}