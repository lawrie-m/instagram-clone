let VGheartIcon = document.getElementById("VGheart-icon")
let VGpostImage = document.getElementById("VGpost-image")
let VGlikes = document.getElementById("VGlikes")

let VGlikesAmount = 0

VGheartIcon.addEventListener("click", function(){
    VGlikesAmount += 1
    VGlikes.innerText = VGlikesAmount
})

VGpostImage.addEventListener("dblclick", function(){
    VGlikesAmount += 1
    VGlikes.innerText = VGlikesAmount
})


let GCheartIcon = document.getElementById("GCheart-icon")
let GCpostImage = document.getElementById("GCpost-image")
let GClikes = document.getElementById("GClikes")

let GClikesAmount = 0

GCheartIcon.addEventListener("click", function(){
    GClikesAmount += 1
    GClikes.innerText = GClikesAmount
})

GCpostImage.addEventListener("dblclick", function(){
    GClikesAmount += 1
    GClikes.innerText = GClikesAmount
})


let JDheartIcon = document.getElementById("JDheart-icon")
let JDpostImage = document.getElementById("JDpost-image")
let JDlikes = document.getElementById("JDlikes")

let JDlikesAmount = 0

JDheartIcon.addEventListener("click", function(){
    JDlikesAmount += 1
    JDlikes.innerText = JDlikesAmount
})

JDpostImage.addEventListener("dblclick", function(){
    JDlikesAmount += 1
    JDlikes.innerText = JDlikesAmount
})



const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

