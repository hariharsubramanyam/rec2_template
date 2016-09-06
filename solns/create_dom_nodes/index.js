(function() {
  console.log($.fn.jquery);
  var itemId;
  var todoItems;
  var todoText;
  var createButton;
  
  var createTodoItem = function() {
    console.log("Button clicked");
    var text = todoText.val();
    if (text.length > 0) {
      itemId++;
      var li = $("<li></li>").attr("id", "item" + itemId);
      var button = $("<button></button>").data("itemId", "item" + itemId).text("Remove");
      var span = $("<span></span>").text(text);
    }
  };

  $(document).ready(function() {
    itemId = 0;
    todoItems = $("#todoItems");
    todoText = $("#todoText");
    createButton = $("#createButton");

    createButton.click(createTodoItem);
  });
})();
