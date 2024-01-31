const getUserData= () =>{
    return new Promise((resolve, reject) => {
        resolve("user data")
    })
}
const getAccStatistics = () =>{
    return new Promise((resolve, reject) => {
        resolve("account statistics")
    })
}
const getActivityLog = () => {
    return new Promise((resolve, reject) => {
        resolve("Activity log")
    })
}
Promise.all([getUserData , getAccStatistics , getActivityLog])
.then((result) => {
    console.log("all promises resolved" , result)
})
.catch((error) =>{
    console.log("error" , error)
} )

const uploadImage1 =  () => {
    return new Promise((resolve, reject) => {
        resolve("image 1 is uploaded")
    })
}
const uploadImage2 = () => {
    return new Promise((resolve, reject) => {
        resolve("image 2 is uploaded")
    })
}
Promise.any([uploadImage1 , uploadImage2])
.then((result) => {
    console.log("image uploaded successfully", result)
})
.catch((error)=>{
    console.log("error" , error)
})