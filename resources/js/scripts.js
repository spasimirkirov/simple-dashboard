
let toggleEditMode = (e) => {
    window.location.href = "./switch_mode";
}

let btn_switch = document.getElementById('customSwitch1');


if(btn_switch){
    btn_switch.addEventListener('change', toggleEditMode);
}
