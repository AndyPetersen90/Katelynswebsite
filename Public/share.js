//This file will be for writing out the axios requests from the
//contact page that we will be sending to the backend.

const localhost = 'http://localhost:5500';

const posted = document.querySelector('.user-posted-photos');
const makingAPost = document.querySelector('.submit-idea-form')


function getPosts() {
    axios.get(`${localhost}/posts`)
        .then(res => {
            res.data.forEach(post => {
                console.log(post)

                const postElem = 
                `<div class="user-posts">
                    <h3 class="poster-name">${post.name}</h3>
                    <img class="shared-photo" src="${post.url}">
                    <p class="user-comments">${post.comments}</p>
                    <button onclick="deleteSharedPost(${post.post_id})" class="delete-button">Delete Post</button>
                </div>`
                
                posted.innerHTML += postElem 
            })
            
            // const sharedPost = document.getElementsByClassName('delete-button');
            // for (let i = 0; i < sharedPost.length; i++) {
            //     sharedPost[i].addEventListener('click', deleteSharedPost);
            // }

        })
        .catch(err => {
            console.log(err);
        })
}
getPosts()


const postName = document.querySelector('.share-name-field');
const postURL = document.querySelector('.photo-url-field');
const postComments = document.querySelector('.share-comments-field');

function resetFormValues() {
    document.querySelector('.submit-idea-form').reset();   
}

makingAPost.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(postName);

    axios.post(`${localhost}/posts`, {name: postName.value, url: postURL.value, comments: postComments.value})
    .then(() => {
        resetFormValues()
        location.reload()
    })
    .catch(err => console.log('front end error', err))

})
resetFormValues()


function deleteSharedPost(id) {
    console.log('function hit')

    axios.delete(`${localhost}/posts/${id}`)
    .then(() => {
        console.log('then received')
        location.reload(true);
    })
    .catch(err => console.log(err))
}


