let firstAnswer  = window.prompt('Do you head LEFT or RIGHT?')
if(firstAnswer === 'LEFT'){
    let secondAnswer = window.prompt(`You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you FOLLOW it, or CONTINUE on your path?`)
     if(secondAnswer === 'FOLLOW'){
        let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical, safe haven. Should you STAY or LEAVE?`)
        if(thirdAnswer === 'STAY'){
            let eighthAnswer = window.alert(`You live happily among the cats for the rest of your days.`)
        } else if(thirdAnswer === 'LEAVE'){
            let eighthAnswer = window.alert(`After leaving the cat colony, you are never able to find it again. Without proof, no one believes your story, but it transforms into legend nonetheless.`)
        }
        
    } else if(secondAnswer === 'CONTINUE'){
        let fourthAnswer = window.prompt(`You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Do you take the LADDER or the STAIRCASE?`)
        if(fourthAnswer === 'STAIRCASE'){
            let tenthAnswer = window.alert(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.`)
        }else if(fourthAnswer === 'LADDER'){
            let eleventhAnswer = window.alert(`After ascending a few feet up the ladder, one of its rungs snaps, and you fall awkwwardly through each of the rungs below. You return home sheepishly.`) 
    }

} else if(firstAnswer === 'RIGHT'){
    let fifthAnswer = window.prompt(`You come across a snoring dragon. On the other side of him, you see a shiny treasure chest. Another path would lead you away from the dragon altogether. Do you go TOWARD the treasure or AWAY from the dragon?`)
    if(fifthAnswer === 'TOWARD'){
        let sixthAnswer = window.prompt(`The dragon wakes up and sits upright. You only have a moment to respond. Will you STAY or RUN?`)
        if(sixthAnswer === 'STAY'){
            let twelthAnswer = window.alert(`You and the dragon have an uplifting conversation about local politicis and become lifelong friends.`)
        }else if(sixthAnswer === 'RUN'){
            let thirteenthAnswer = window.alert(`You run quickly back to the cave entrance and return home sheepishly.`)
        }

    }else if(fifthAnswer === 'AWAY'){
        let seventhAnswer = window.prompt(`After walking a while longer,  you come acrosss a shiny blue flower. It is so beautiful. Will you DRAW it or PICK it?`)
        if(seventhAnswer === 'DRAW'){
            let fourteenthAnswer = window.alert(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.`)
        }else if(seventhAnswer === 'PICK'){
            let fifteenthAnswer = window.alert(`You pick the flower and take it home. Everyone marvels at its brilliance. However, the flower fades over time and eventually crumbles to dust.`)
        }
    }
}
}

