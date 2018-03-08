var a = JSON.parse(localStorage.getItem('courses'));
var counter = 0;

infomaker();



function cardmaker() {

    var board = document.createElement('div');
    board.className = "card";
    board.id = "coursecard";
    document.getElementById('space').appendChild(board);

    var picture = document.createElement('div');
    picture.className = "picture";
    board.appendChild(picture);


    var img = document.createElement('img');
    img.src = 'course.jpg';
    picture.appendChild(img);

    var info = document.createElement('div');
    info.className = "info";
    board.appendChild(info);



    // making labels //

    var label = document.createElement('label');
    label.id = "nlabel" + counter;
    label.className="nlabel";
    label.innerHTML = "NAME HERE"
    info.appendChild(label);

    label = document.createElement('label');
    label.id = "aulabel" + counter;
    label.className="aulabel";
    label.innerHTML = "AUTHOR HERE"
    info.appendChild(label);

    label = document.createElement('label');
    label.id = "dlabel" + counter;
    label.className="dlabel";
    label.innerHTML = "DESCRIPTION HERE"
    info.appendChild(label);

    label = document.createElement('label');
    label.id = "plabel" + counter;
    label.className="plabel";
    label.innerHTML = "AUTHOR HERE"
    info.appendChild(label);

    label = document.createElement('label');
    label.id = "rlabel" + counter;
    label.className="rlabel";
    label.innerHTML = "AUTHOR HERE"
    info.appendChild(label);
    counter++;
}


// var n = document.getElementById('nlabel');
// var au = document.getElementById('aulabel');
// var d = document.getElementById('dlabel');
// var p = document.getElementById('plabel');
// var r = document.getElementById('rlabel');


// n.innerHTML = (a[0].name);
// au.innerHTML = (a[0].author);
// d.innerHTML = (a[0].description);
// p.innerHTML = (a[0].price);
// r.innerHTML = (a[0].rating);


function infomaker() {

    for (var i = 0; i < a.length; i++) {

        cardmaker();

        var n = document.getElementById('nlabel' + i);
        var au = document.getElementById('aulabel' + i);
        var d = document.getElementById('dlabel' + i);
        var p = document.getElementById('plabel' + i);
        var r = document.getElementById('rlabel' + i);


        n.innerHTML = (a[i].name);
        au.innerHTML = (a[i].author);
        d.innerHTML = (a[i].description);
        p.innerHTML = "$ "+(a[i].price);
        r.innerHTML = (a[i].rating) + " star rating";
    }
}