function colorirData(){
    let day       = parseInt(document.getElementById('day').value) + 5;
    let color     = document.getElementById('color').value;
    let calendar  = document.getElementById('calendar');

    let days = calendar.getElementsByTagName('td');
    days[day].style.background = color;
}