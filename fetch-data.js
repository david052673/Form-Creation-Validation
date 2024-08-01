document.addEventListener("DOMContentLoaded",async function fetchUserData() {
    

    const apiUrl='https://jsonplaceholder.typicode.com/users'

    let dataContainer=document.getElementById(id='api-data');
    try {
        const response= await fetch(apiUrl);
        const users =await response.json();
        dataContainer.innerHTML=''
        
    } catch (error) {
        dataContainer.innerHTML=""
        dataContainer.textContent ='Failed to load user data.'
        
    }

    const userList=document.createElement("ul");
    users.forEach((user) => {
        const li=user.createElement('li');
        li.textcontent=users.value
        userList.appendChild(li);
        
    });
    dataContainer.appendChild(userList);



});