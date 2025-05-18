function getRequest(url){
    data=[]
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
        console.log(json)
        return data=json
    })
}
let url='https://jsonplaceholder.typicode.com/users'
getRequest(url)









