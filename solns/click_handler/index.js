(function() {
  console.log($.fn.jquery);
  var itemId;
  var todoItems;
  var todoText;
  var createButton;
  
  var createTodoItem = function() {
    console.log("Button clicked");
  };

  $(document).ready(function() {
    itemId = 0;
    todoItems = $("#todoItems");
    todoText = $("#todoText");
    createButton = $("#createButton");

    createButton.click(createTodoItem);
  });
})();
