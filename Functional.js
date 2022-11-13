
const workouts = ['Kettelbell Swings 4x30', '2 mile ruck with weighted vest','30 minute walk on incline treadmil','50 burpees','5 15m sprints','15 minutes on the assault bike','10 minutes of farmers carrys','25 box jumps']
let workout 
let message

function findWorkout() {
    let rand = Math.floor(Math.random()*workouts.length)
    workout = workouts[rand]
    return workout
}

function displayMessage() {
    let final = findWorkout()
    message = `Your cardio session today will be complete with: ${final}`
    return message
}

function changeText() {
    document.getElementById('Output').innerHTML = displayMessage()
}

