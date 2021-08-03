// 1.
// Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let postsBox = document.getElementById('posts-box')

        for (const post of posts) {
            let title = document.createElement('h2')
            title.innerText = `${post.id}. ${post.title}`

            let btnDetails = document.createElement('button')
            btnDetails.innerText = 'Details'
            btnDetails.onclick = function () {

                fetch(`https://jsonplaceholder.typicode.com/posts/${post.userId}/comments`)
                    .then(value => value.json())
                    .then(value => {
                        let posts = document.getElementById('posts')
                        posts.innerHTML = ''

                        for (let post of value) {
                            let liPost = document.createElement('li')
                            liPost.innerHTML = `<strong>Post:</strong> ${post.body}`
                            posts.appendChild(liPost)
                        }
                    })
            }
            title.appendChild(btnDetails)
            postsBox.appendChild(title)
        }
    })

//----------------------------------------------------------------------------------------------------------------------