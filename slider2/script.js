const totalTasks = 20;
let completedTasks = 0;

function completeTask() {
  if (completedTasks < totalTasks) {
    completedTasks++;
    let progressPercent = (completedTasks / totalTasks) * 100;

    // Update elixir bar fill
    document.getElementById('elixirProgress').style.width = progressPercent + '%';
  }
}
