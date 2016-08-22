//debugger
console.log('Hello This is tictactoe js script');

// function makeBlocks() {
        for (var i = 0; i < 3; i++) {
            var row = document.createElement('div');
            row.className = "row";
            for (var j = 0; j < 3; j++) {

                box.className = "box";
                row.appendChild(box);
            }
            document.getElementById('boxParent').appendChild(row);
        }
  //  }


// function makeBlocks () {
//    for(var row=0;row<3;row++)
//    {
//        var row = document.createElement('div');
//        for(var col=0;col<3;col++)
//        {
//            $(".row"+row).append("<div class='box'></div>");
//        }
//    }
// })

// function makeBlocks() {
//         for (var i = 0; i < 3; i++) {
//            var row = document.createElement('div');
//             row.className = "row";
//            for (var j = 0; j < 3; j++) {
//                var box = document.createElement('div');
//                box.className = "box";
//                row.appendChild(box);
//            }
//            document.getElementById('boxParent').appendChild(row);
//         }
//  }
