"use strict";

// Первое задание (изменение цвета ссылок)
document.addEventListener('DOMContentLoaded', () => {

    const links=document.querySelectorAll('.link');
    const colorList=['blue', 'red' ,'rgb(255, 2, 120)','rgb(175, 2, 255)','deepskyblue' ,'black'];

    links.forEach(link => {
        link.querySelector('a').style.color=colorList[Math.floor(Math.random()*colorList.length)];
    });



    // Второе задание ()

    const listBlock=document.querySelector('.create-list');

    const list = document.createElement('ul');
    list.classList.add('user-list');
    list.style=`
    text-align: left;
    `;
    listBlock.append(list);

    while(true){
        let item=prompt("Что вам нужно?","");

        if (!item) break;

        let listItem = document.createElement('li');
        listItem.textContent=item;
        list.append(listItem);
    }



    // Третье задание (уведомление)

    const notification=document.querySelector('.notif');
    const notifList=[
        'Новые серия',
        'Понравилось?',
        'Переходи по ссылке в описании',
        'Ждешь?',
        'Швифтанись',
        '6 СЕЗОН!!!!',
        ];

    function showNotification(text){
        let notif=document.createElement('div');
        notif.className = 'notification';
        // notif.classList.add('notification');
        notif.textContent=text;
        notif.style=`
        padding: 20px 250px;
        display: inline-block;
        border: 2px solid rgb(25, 0, 255);
        background-color: rgb(48, 223, 13)
        `;

        notification.append(notif);
        // console.log(notification);

        setTimeout(()=>{notif.remove()},1500);
    }

    setInterval(() => {showNotification(notifList[Math.floor(Math.random()*notifList.length)])}, 2500);



    // Четвертое задание ()

    const area=document.querySelector(".area");
    const chicken=area.querySelector('img');

    chicken.style.top=Math.round(area.clientHeight/2 - chicken.offsetHeight/2) + "px";
    chicken.style.left=Math.round(area.clientWidth/2 - chicken.offsetWidth/2) + "px";


    const clickX=document.querySelector('.clickX').querySelector('span');
    const clickY=document.querySelector('.clickY').querySelector('span');

    area.onclick = function(click){
        clickX.textContent=click.clientX;
        clickY.textContent=click.clientY;
    }



    // Пятое задание (кнопка закрытия уведомления)

    const notif = document.querySelector('.notifs');
    const notifBtn = notif.querySelector('.notif__btn');
    const notifInner = notif.querySelector('.notif__inner');
    const notifCounter = notif.querySelector('.notif__counter');
    const notifArr = [
        'Новые серия',
        'Понравилось?',
        'Переходи по ссылке в описании',
        'Ждешь?',
        'Швифтанись',
        '6 СЕЗОН!!!!',
    ];

    let numberNotif = 0;
    let counter = 0;

    function createNotif() {
        let element = document.createElement('div');
        element.classList.add('notif__item');

        if (numberNotif < notifArr.length) {
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
        } else {
            numberNotif = 0;
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
        }

        element.style=`
        position: relative;
        width: 10%;
        padding: 10px 20px;
        display: inline-block;
        border: 2px solid rgb(25, 0, 255);
        margin-bottom: 5px;
        `;

        notifInner.append(element);

        let closeTab = document.createElement('i');
        closeTab.className = 'fa-solid fa-xmark';

        closeTab.style=`
        position: absolute;
        right: 10px;
        top: 3px;
        cursor: pointer;
        `;

        element.append(closeTab);

        notifCounter.textContent = counter;

        // console.log(notifInner);
    }

    let timerId = setInterval(createNotif, 3000);
    
    notifBtn.addEventListener('click', () => {
        clearInterval(timerId);
        setTimeout(function() {
            timerId = setInterval(createNotif, 3000);
        }, 10000);
    });

    notifInner.onclick = function(event) {
        if (!event.target.classList.contains('fa-xmark')) return;

        let notif = event.target.closest('.notif__item');
        notif.remove();

        counter--;
        notifCounter.textContent=counter;
    };

});
