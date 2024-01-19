const Blog = () => {

    const articles =  [
        {
         id :1,
         title:"Commment ameliorer sa maniere de voir les choses dans la vie",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto veniam fuga sapiente mollitia facere alias tempore aspernatur nulla obcaecati? Debitis omnis maiores quia corporis similique veritatis dolores vitae eos aperiam?",
         created_at :"230-30-23",
         category:"Sociabilité"
        },

        {
            id :1,
            title:"Commment ameliorer sa maniere de voir les choses dans la vie",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto veniam fuga sapiente mollitia facere alias tempore aspernatur nulla obcaecati? Debitis omnis maiores quia corporis similique veritatis dolores vitae eos aperiam?",
            created_at :"230-30-23",
            category:"Sociabilité"
           },

           {
            id :1,
            title:"Commment ameliorer sa maniere de voir les choses dans la vie",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto veniam fuga sapiente mollitia facere alias tempore aspernatur nulla obcaecati? Debitis omnis maiores quia corporis similique veritatis dolores vitae eos aperiam?",
            created_at :"230-30-23",
            category:"Sociabilité"
           },

           {
            id :1,
            title:"Commment ameliorer sa maniere de voir les choses dans la vie",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto veniam fuga sapiente mollitia facere alias tempore aspernatur nulla obcaecati? Debitis omnis maiores quia corporis similique veritatis dolores vitae eos aperiam?",
            created_at :"230-30-23",
            category:"Sociabilité"
           },

           {
            id :1,
            title:"Commment ameliorer sa maniere de voir les choses dans la vie",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto veniam fuga sapiente mollitia facere alias tempore aspernatur nulla obcaecati? Debitis omnis maiores quia corporis similique veritatis dolores vitae eos aperiam?",
            created_at :"230-30-23",
            category:"Sociabilité"
           },

           {
            id :1,
            title:"Commment ameliorer sa maniere de voir les choses dans la vie",
            description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto veniam fuga sapiente mollitia facere alias tempore aspernatur nulla obcaecati? Debitis omnis maiores quia corporis similique veritatis dolores vitae eos aperiam?",
            created_at :"230-30-23",
            category:"Sociabilité"
           },
    ];
    return ( 
       <main role="main">
        <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Liste des articles </h1>
          <p className="lead text-muted">Liste des articles récemments ajoutés .</p>
         
        </div>
      </section>
        <section className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
        {articles.map((name, index) => (
            <div className="col">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name.title}</h5>
                <p className="card-text">{name.description}.</p>
                
            </div>
            </div>
        </div>
      ))}
         </div>
        </section>
       </main>
     );
}
 
export default Blog
