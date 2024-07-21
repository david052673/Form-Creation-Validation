function fetchUserData(callback) {
    setTimeout(() => {

        callback('Data fetched successfully');
    }, 2000); 
}
const apiUrl='https://jsonplaceholder.typicode.com/users'

let dataContainer=document.getElementById(id='api-data')