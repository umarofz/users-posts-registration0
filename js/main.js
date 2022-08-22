let postsWrapper = document.querySelector(".posts__wrapper");
let postTemplate = document.querySelector(".post__template").content
let postBtn = document.querySelector(".post__btn1");
let logout = document.querySelector(".btn__logout");

logout.addEventListener("click", function() {
    localStorage.removeItem("token")
    
    window.location.href = "/login.html"
})

let localToken = localStorage.getItem("token")
fetch("https://fast-ravine-16741.herokuapp.com/api/posts", {
method: 'GET',
headers: {
    "Content-Type":"application/json",
    "Authorization": localToken
}
})
.then(res => res.json())
.then(data => {
    if (!data.error) {
        renderPosts(data.posts)
    } else {
        window.location.href = "/login.html"
    }
})


function renderPosts(array) {
    let fragment = document.createDocumentFragment();
    
    for (const item of array) {
        let postItem = postTemplate.cloneNode(true);
        postItem.querySelector(".post__id").textContent = item._id;
        postItem.querySelector(".post__name").textContent = item.title;
        postItem.querySelector(".post__body").textContent = item.body;
        postItem.querySelector(".post__btn1").dataset.postId = item._id;
        fragment.appendChild(postItem);
    }
    
    postsWrapper.appendChild(fragment);
}

postsWrapper.addEventListener("click", function(evt) {
    let datasetId = evt.target.dataset.postId;
})
