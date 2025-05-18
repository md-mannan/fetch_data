function getRequest(url){

    let xhr=new XMLHttpRequest()
    xhr.open('get',url)

    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                data=JSON.parse(xhr.response)
                console.log(data)
            }else{
                console.log(xhr.status)
            }
        }
    }
    xhr.send()
}
let url='https://jsonplaceholder.typicode.com/users'
getRequest(url)







