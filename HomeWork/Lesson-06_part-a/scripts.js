// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         for (const item of value) {
//             let  div = document.createElement('div')
//             document.body.appendChild(div)
//
//             let title = document.createElement('h2')
//             title.innerText =  `${item.id}. ${item.title}`
//             title.style.color = 'red'
//             div.appendChild(title)
//
//             let info = document.createElement('p')
//             info.innerHTML = `<strong>User:</strong> ${item.userId} <br> <strong>Post:</strong> ${item.body}`
//             div.appendChild(info)
//
//
//         }
// })

//----------------------------------------------------------------------------------------------------------------------

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        for (const item of value) {
            let div = document.createElement('div')
            document.body.appendChild(div)

            let title = document.createElement('h2')
            title.innerText = `${item.id}. ${item.name}, e-mail: ${item.email}`
            title.style.color = 'red'
            div.appendChild(title)

            let info = document.createElement('p')
            info.innerHTML = `<strong>${item.postId}</strong>: ${item.body}`
            div.appendChild(info)
        }
    })