const data=[
    {
        name:'John Doe',
        age:32,
        gender:'Male',
        lookingfor:'Female',
        location:'Boston MA',
        image:'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name:'Jen Smith',
        age:26,
        gender:'Female',
        lookingfor:'Male',
        location:'Miami FL',
        image:'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name:'William Johnson',
        age:38,
        gender:'Male',
        lookingfor:'Female',
        location:'Lynn MA',
        image:'https://randomuser.me/api/portraits/men/83.jpg'
    }
];


// Profile Iterator

function profileIterator(profiles){
    let index=0;

    return {
        next: function(){
            return (index<profiles.length)?
            {value:profiles[index++],done:false}:
            {done:true}
        }
    };
}

const profiles= profileIterator(data);

// call first profile
nextProfile();

// Next event
document.getElementById('next').addEventListener('click',nextProfile);

function nextProfile(){
    const current=profiles.next().value;
    if(current!==undefined){
        document.getElementById('profileDisplay').innerHTML=`<ul class="list-group">
                <li class="list-group-item">Name: ${current.name}</li>
                <li class="list-group-item">Age: ${current.age}</li>
                <li class="list-group-item">Location: ${current.location}</li>
                <li class="list-group-item">Preference: ${current.gender} looking for ${current.lookingfor}</li>
               </ul>`;
        document.getElementById('imageDisplay').innerHTML=`<img src="${current.image}" class="border rounded-circle">`;
    }else{
        // reload the page
        window.location.reload();
    }
}