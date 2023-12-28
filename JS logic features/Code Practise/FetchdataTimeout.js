function fetchDatawithTimeout(url, timeout) {
    const controller = new AbortController();
    const { signal } = controller;



    const timeoutId = setTimeout(() => {

        controller.abort();
    }, timeout)

    //fetch(url,[,option])
    return fetch(url, { signal })
        .then(response => {
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json();

        })
}
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const timeout = 20;


fetchDatawithTimeout(url, timeout)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })