//debugger
console.log('Hello frontend');

function makeBlocks() {
        for (var i = 0; i < 9; i++) {
      //      var row = document.createElement('div');
      //      row.className = "row";
      //      for (var j = 0; j < 3; j++) {
                var box = document.createElement('div');
                box.className = "box"
                box.id=i
      //      }
            document.getElementById('boxParent').appendChild(box);
        }
    }

for (var j = 0; j < 9; j++) {
    document.getElementById('j').addEventListener("click", function() {
    console.log("cell " + j + " clicked!");
    });
}
