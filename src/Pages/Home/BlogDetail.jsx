import { useParams } from "react-router-dom";

const BlogDetail = () => {

    const {id}  =  useParams();

    return (  
        <h1>La page detail des article {id}</h1>
    );
}
 
export default BlogDetail
