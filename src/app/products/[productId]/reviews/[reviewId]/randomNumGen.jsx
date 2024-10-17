export default function randomNumberGen(num) {
    console.log('running the numgen function')
    console.log(Math.floor(Math.random() * num))
    return Math.floor(Math.random() * num)
}