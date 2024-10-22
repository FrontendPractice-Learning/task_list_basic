$(document).ready(function(){

    const tasks = [];
    const taskCompleted = $('<li class = "task-completed"></li>');
    const taskNameInput = $('#task-name');


    let lines = '';

    $('form').on('submit', function(e){
        e.preventDefault();
        addLine();

        

    })

    function addLine (){
        

        if (tasks.includes(taskNameInput.val())){
            alert(`Task already added!`);
            taskNameInput.val('');

        }else {
            tasks.push(taskNameInput.val());

            const taskItem =  $(`
                <ul>
                    <li>${taskNameInput.val()}</li>
                </ul>
            `).appendTo('#new-task');
            
            taskItem.find('li').click(function(){
                $(this).toggleClass('task-completed');
            });

            taskNameInput.val('');
        

        }
    }

    
})