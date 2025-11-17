/**
 * Task Class
 *
 * A class to manage tasks with title, priority, completion status, and time tracking.
 */

class Task {

    #completed = false;
    #minutesSpent = 0;
    static allTasks = []


    constructor(title, priority) {
        this.title = title
        this.priority = priority
        Task.allTasks.push(this)
    }

    workOn(minutes){
        this.#minutesSpent += minutes
        console.log(`Worked on ${this.title} for ${minutes} minutes. Total time: ${this.#minutesSpent} minutes`)
    }

    complete() {
        this.#completed = true
        console.log(`${this.title} has been completed!`)
    }

    completedStatus() {
        return this.#completed
    }

    isComplete() {
       return this.#completed
    }
}

//Test class with examples below:


// Export the Task class for testing
module.exports = { Task };
