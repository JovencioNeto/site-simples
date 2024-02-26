
const switcher = document.querySelector('.btn');

const corpo = document.body.classList

switcher.addEventListener('click', function(){

    if(corpo.contains('dark-theme')){
        corpo.remove('dark-theme');
        corpo.add('light-theme');
    }

    else{
        corpo.remove('light-theme');
        corpo.add('dark-theme');
    }

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else{
        this.textContent = "Light";
    }

    console.log('current Class Name:' + className);
});
