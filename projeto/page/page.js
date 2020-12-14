  let latitude;
  let logitude;



  document.addEventListener('DOMContentLoaded', () => {

      atualiza()

  });

  function atualiza() {
      fetch("http://localhost:3000/api/all").then(res => {
          return res.json();
      }).then(json => {



          let elementos = "";
          let posts = JSON.parse(json);
          console.log(res)
          posts.forEach((post => {
              post.nome = document.getElementById('nomeDigitado');


          }));



      })
  }

  function newPost() {
      let nome = document.getElementById('nomeDigitado').value;
      let email = document.getElementById('emailDigitado').value

      let post = { nome, email, latitude, longitude };

      const options = {
          method: "POST",
          headers: new Headers({ 'content-type': 'aplication/json' }),

          body: JSON.stringify(post)
      }

      fetch("http://localhost:3000/api/new", options).then(res => {

          updatePosts();
      })


  }