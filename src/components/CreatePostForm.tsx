import { useState } from "react";
import Post from "../models/post.interface";

interface CreatePostFormProps {
    addPost: (newPost: Post) => void;
}

const CreatePostForm = ({ addPost }: CreatePostFormProps): JSX.Element => {

    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    // Form Submit Handler
    const formSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        addPost({ title, body, userId: 202, id: 101 });
    }

    return ( 
        <form className="bg-primary p-3 rounded mb-3" onSubmit={formSubmitHandler}>
            <div className="mb-3 d-flex align-items-center justify-content-between gap-3">
              <input 
               type="text" 
               className="form-control" 
               placeholder="Post Title" 
               value={title}
               onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3 d-flex align-items-center justify-content-between gap-3">
              <input 
               type="text" 
               className="form-control" 
               placeholder="Post Body" 
               value={body}
               onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <button className="btn btn-dark btn-lg w-100" type="submit">
                Add Post
            </button>
        </form>
     );
}
 
export default CreatePostForm;