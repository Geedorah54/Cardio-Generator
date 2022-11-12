
const workouts = ['Kettelbell Swings 4 x 30', '2 mile ruck with weighted vest','30 minute walk on incline treadmil','50 burpees','5 15m sprints','15 minutes on the assault bike','10 minutes of farmers carrys','25 box jumps']
let workout 
const findWorkout = () => {
    let rand = Math.floor(Math.random()*workouts.length)
    workout = workouts[rand]
    return workout
}

const displayMessage = () => {
    let final = findWorkout()
    return `Your cardio session today will be complete with: ${final}`

}

