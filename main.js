var coursearray = [];
var selectvalue;
var i = 0;



function mock(event) {
    console.log(event)
    event.preventDefault();
    // alert("The form was submitted");
}


function combo(obj) {
    selectvalue = obj.value;
}

function flush(o1, o2) {
    for (var i = 0; i < 3; i++) {
        o1[i].value = "";
    }
    o2.value = "";
    var o3=document.getElementById('s');
    console.log(o3);
    o3.value=0;
}

function addcourseFunc(event) {
    event.preventDefault();

    var c = {
        name: "Default Name",
        author: "Default Author",
        description: "Default description",
        price: "Default price",
        rating: "0"
    };

    var temp = document.getElementById('course-container').getElementsByTagName('input');
    var temp2 = document.getElementById('description');

    c.name = temp[0].value;
    c.author = temp[1].value;
    c.price = temp[2].value;
    c.description = temp2.value;
    c.rating = selectvalue;


    if (c.name == "" || c.author == "" || c.description == "" || c.price == "" || c.rating === undefined) {
        alert("Fill the required spaces or Check:\n-Price is more than 10$\n-Ratings are not set");
    }


    else {
        var a = JSON.parse(localStorage.getItem('courses'));

        if (a == null) {
            coursearray.push(c);
            localStorage.setItem('courses', JSON.stringify(coursearray));
            console.log("Course Array is set in local storage!");
            alert("Course added");
            flush(temp,temp2);
        }
        else {
            a.push(c);
            localStorage.setItem('courses', JSON.stringify(a));
            console.log("New course is added in local storage!");
            alert("Course added");
            flush(temp,temp2);
        }
    }

}


function redirect() {
    var a=JSON.parse(localStorage.getItem('courses'));
    if (a == null) {
        alert("There are no courses!!!!");
    }
    else {
        document.getElementById("nextpage").onclick = function () {
            var url = "Courses.html";
            window.location.replace(url);
        }
    }
}