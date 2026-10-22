function updateClock(){
    const now = new Date();
    const h = string(now.getHours()).padStart(2,'0');
    const m = string(now.getMinutes()).padStart(2,'0');
    const s = string(now.getSeconds()).padStart(2,'0');

    document.getElementById('h1').src = 'Anh/Bai13/${h[0]}.gif';
    document.getElementById('h2').src = 'Anh/Bai13/${h[1]}.gif';
    document.getElementById('m1').src = 'Anh/Bai13/${h[0]}.gif';
    document.getElementById('h2').src = 'Anh/Bai13/${h[1]}.gif';
    document.getElementById('s1').src = 'Anh/Bai13/${h[0]}.gif';
    document.getElementById('s2').src = 'Anh/Bai13/${h[1]}.gif';


    const hours = now.getHours();
    let greetingText = "Chao buoi toi";
    if(hours<12){
        greetingText = 'chao buoi sang';
    }
    else if( hours <18){
        greetingText = 'chao buoi chieu';
    }
    document.getElementById('greeting').innerText = greetingText;
}

updateClock();
setInterval(updateClock,1000);