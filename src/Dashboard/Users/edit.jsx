const EditUsers = () => {

    const postId = 1; // Assuming we are updating the post with ID 1
    const updatedData = { title: "New Title", body: "Updated body text" };


    const handleUpdate = () => {
        axios
          .put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedData)
          .then((response) => {
            console.log("Updated Post:", response.data);
          })
          .catch((error) => {
            console.error("Error updating the post:", error);
          });
      };

      

    return ( 
        <h1>Edition de l'utilisateur</h1>
     );
}
 
export default EditUsers;