document.addEventListener("DOMContentLoaded", event =>{
    const app = firebase.app();
    console.log(app)
})


function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(result =>{
        const user = result.user
        document.write(`hello ${user.displayName}`)
        console.log(user)
    })
    .catch(console.log)
}

function app(){
    return(
        <div>
            <button>Click</button>
        </div>
    )

}

export default app