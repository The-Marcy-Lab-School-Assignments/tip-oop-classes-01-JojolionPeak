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

    get completedStatus() {
        return this.#completed
    }

    isComplete() {
       return this.#completed
    }

    get timeSpent() {
        return this.#minutesSpent
    }
    static getTotalTasks() {
        return Task.allTasks.length
    }

    static findByTitle(title){
        if (Task.allTasks.includes(title)){
            Task.allTasks.find((el) => el === title)
        } else {
            return undefined
        }
    }
}

//Test class with examples below:



// Static property examples
const t1 = new Task("Laundry", "medium");
const t2 = new Task("Pay bills", "high");

console.log(Task.allTasks);
// [ Task {...}, Task {...}, Task {...} ]

// Static method examples
console.log(Task.getTotalTasks()); // 3

console.log(Task.findByTitle("Laundry"));
// Returns the "Laundry" task instance
// Export the Task class for testing
module.exports = { Task };
