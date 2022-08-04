const TaskManager = require("./assets/js/taskManager");

describe('Testing TaskManager methods', () => {
    const task = new TaskManager();
    const testArray = task.tasks
    const testTask = () => {
        task.addTask('asd', 'asd', 'asd', '12/1/2022')

        return testArray
    }
    

    test('addTask', () => {
        
        expect(testTask()).toEqual(
            expect.arrayContaining([{

            ID:'1',
            Name:'asd',
            Description:'asd',
            AssignedTo:'asd',
            DueDate:'12/1/2022',
            Status:'ToDo'

        }])
     )
    })

    const idObj = {

        ID:'1',
        Name:'asd',
        Description:'asd',
        AssignedTo:'asd',
        DueDate:'12/1/2022',
        Status:'ToDo'

    }

    test('get object based on id passed in', () => {
        expect(task.getTaskById(1)).toEqual(expect.arrayContaining([idObj]))
    })


    test('deletes tasks', () => {

        expect(task.deleteTask(0)).toEqual(expect.arrayContaining([]))

    })

})