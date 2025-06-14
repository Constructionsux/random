const specialspan = document.getElementById('special1Button');
const specialspan2 = document.getElementById('special2Button');
const requesta = document.getElementById('requestButton');
const cancelButton = document.getElementById('cancelButton');
const specialspan3 = document.getElementById('special3Button');
const speacial1ul = document.getElementById('speacial1');
const speacial1ul2 = document.getElementById('speacial2');
const speacial1ul3 = document.getElementById('speacial3');
const Formondiv = document.getElementById('FormOn');
// const arrowdowni = document.getElementById('arrowdown');
// const arrowupi = document.getElementById('arrowup');


specialspan.addEventListener('mouseover', function () {
    speacial1ul.style.display = 'block';
    // arrowdowni.style.display = 'none';
    // arrowupi.style.display = 'block';
} );
specialspan2.addEventListener('mouseover', function () {
    speacial1ul2.style.display = 'block';
    // arrowdowni.style.display = 'none';
    // arrowupi.style.display = 'block';
} );
specialspan3.addEventListener('mouseover', function () {
    speacial1ul3.style.display = 'block';
    // arrowdowni.style.display = 'none';
    // arrowupi.style.display = 'block';
} );

requesta.addEventListener('click', function () {
    Formondiv.style.display = 'block';
} );

cancelButton.addEventListener('click', function () {
    Formondiv.style.display = 'none';
} );

specialspan.addEventListener('click', function () {
    speacial1ul.style.display = 'none';
    //   arrowdowni.style.display = 'block';
    // arrowupi.style.display = 'none';
} );
specialspan2.addEventListener('click', function () {
    speacial1ul2.style.display = 'none';
    //   arrowdowni.style.display = 'block';
    // arrowupi.style.display = 'none';
} );
specialspan3.addEventListener('click', function () {
    speacial1ul3.style.display = 'none';
    //   arrowdowni.style.display = 'block';
    // arrowupi.style.display = 'none';
} );



(function () {
    var header = document.getElementById('time1');
    var theTime = (new Date()).getHours();
    /* Open from 6AM to 11AM */
    if (theTime >= 3 && theTime <= 11) {
        header.innerText = "Open";
    } else if (theTime >= 12 && theTime <= 17) /* Open from 12PM to 17PM */ {
        header.innerText = "Open";
    } else /*Close */ {
        header.innerText = "Closed";
        header.style.color = "red"
    }
})();



