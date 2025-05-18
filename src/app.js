function getRequest(url){
fetch(url)
.then(response=>response.json())
.then(json=>console.log(json))
    
    
}
let url='https://jsonplaceholder.typicode.com/users'
getRequest(url)







