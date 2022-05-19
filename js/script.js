let heading = document.getElementById('heading_middle')
let userName = prompt('Whats your name')

heading.textContent = "Welcome to posts projekt " + userName;
 
let i = 0;
let html = "";
const data = posts.map((post) => {
  console.log(post.comments);
  html += `
   <div class="container">
  <div class="midile_div">
    <div class="imgDiv">
      <img src="https://picsum.photos/200/300" alt="img" />
    </div>
    <div class="nameDiv">
      <h3>${post.user.name}</h3>
    <h4>${post.user.username}</h4>
    </div>

  </div>
  <h1>${post.title}</h1>
  <p>
    ${post.body}
  </p>
  <p>
  <a "class="link" data-bs-toggle="collapse" href="#collapseExample${i}" role="button" aria-expanded="false" aria-controls="collapseExample">
    Comments
  </a>
</p>

<div class="collapse" id="collapseExample${i}">
  <div class="card-body">
  <h3 >${post.comments[0].email}</h3>
  <h5 >${post.comments[0].email}</h5>
  <h5 >${post.comments[0].body}</h5>
  <hr/>
  </div>
  </div>

  <div class="collapse" id="collapseExample${i}">
  <div class="card-body">
  <h3 >${post.comments[1].email}</h3>
  <h5 >${post.comments[1].email}</h5>
  <h5 >${post.comments[1].body}</h5>
  <hr/>
  </div>
  </div>

  <div class="collapse" id="collapseExample${i}">
  <div class="card-body">
  <h3 >${post.comments[2].email}</h3>
  <h5 >${post.comments[2].email}</h5>
  <h5 >${post.comments[2].body}</h5>
  <hr/>
  </div>
  </div>

  <div class="collapse" id="collapseExample${i}">
  <div class="card-body">
  <h3 >${post.comments[3].email}</h3>
  <h5 >${post.comments[3].email}</h5>
  <h5 >${post.comments[3].body}</h5>
  <hr/>
  </div>
  </div>
  <div class="collapse" id="collapseExample${i}">
  <div class="card-body">
  <h3 >${post.comments[4].email}</h3>
  <h5 >${post.comments[4].email}</h5>
  <h5 >${post.comments[4].body}</h5>
  <hr/>
  </div>
  </div>

</div>`
i++;
});

placeholder.innerHTML = html;









