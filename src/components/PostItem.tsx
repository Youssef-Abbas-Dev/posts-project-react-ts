import Post from "../models/post.interface";

interface PostProps {
    post: Post;
    deletePost: (postId:number) => void;
}


const PostItem = ({ post, deletePost }: PostProps) => {
    return (
        <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
             <button onClick={() => deletePost(post.id)} className="btn btn-danger">
                Delete Post
             </button>
            </td>
        </tr>
    );
}

export default PostItem;