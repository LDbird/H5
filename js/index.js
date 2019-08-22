let $headerImg = $('.header_box img');
let $audio = $('#audio');
let $main = $('.main_box');
let isRunning = false;
$headerImg.on('touchend',function () {
    if(isRunning){
        $(this).css({
            animationPlayState:'paused'
        });
        isRunning = false;
        $audio[0].pause()
    }else {
        $(this).css({
            animationPlayState: 'running'
        });
        isRunning = true;
        $audio[0].play();
    }
});

let $section = $('section');
// let ary = [...$section[0]];

// $main.on('touchend',function () {
//     $section.each((index,item)=>{
//         // console.log(item);
//         $(item).addClass('hide');
//         $(item).next().removeClass('hide');
//     })
// });