// 1.
// Отримати з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {

            const div = document.createElement('div')
            document.body.appendChild(div)
            const {userId, id, title, body} = post
            div.innerHTML = `<h2>${userId} - ${id} - ${title}</h2><p>${body}</p>`

            const button = document.createElement('button')
            button.innerText = 'Comments'
            div.appendChild(button)

            button.onclick = () => {

                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(comments => {
                        const divComments = document.createElement('div')
                        div.appendChild(divComments)
                        for (const comment of comments) {
                            const commentItem = document.createElement('div')
                            commentItem.innerText = `${comment.id} - ${comment.name}`
                            divComments.appendChild(commentItem)
                        }
                    })
            }
        }
    })

//----------------------------------------------------------------------------------------------------------------------