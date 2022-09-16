let input = document.querySelector('.input')
let btn = document.querySelector('.button')

let input2 = document.querySelector('.input2')
let btn2 = document.querySelector('.button2')



btn.addEventListener('click',() => {
    input.value = GeneratePassword(6);

});

btn2.addEventListener('click' ,() => {
    input2.value = Generate4(4)
})

function GeneratePassword(length = 6){
    let chartset = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890@#$';

    let password = '';

    for(let i = 0; i <length;++i){
        let at = Math.floor(Math.random() * (chartset.length + 1));

        password += chartset.charAt(at)
    }
    return password


}

function Generate4(length = 4){
    let simvols = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890@#$';
    let parol = '';

    for(let j = 0; j<length;++j){
        let four = Math.floor(Math.random() * (simvols.length + 1));
        parol += simvols.charAt(four)
    }
    return parol
}

