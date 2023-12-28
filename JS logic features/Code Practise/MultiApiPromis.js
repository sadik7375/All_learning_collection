function fetchMultiApi(apiUrls) {
    const promises = apiUrls.map(url => fetch(url).then(response => response.json()));
    return Promise.all(promises)
}

const apiUrls = [

    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'


]

fetchMultiApi(apiUrls)

.then(results => {
        console.log(results);
    })
    .catch(err => {
        console.log(err.message);
    });