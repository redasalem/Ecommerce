window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import'bootstrap/dist/css/bootstrap.min.css';
import'./css/style.css';
import'@fortawesome/fontawesome-free/js/all.min';
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

document.querySelectorAll('.add-to-card-btn').forEach( (el)=> 
    el.onclick = function () {
       window.alert("اضيف المنتج الى عربة الشراء");
    }
 );
// ---------------------------------------------------------------------------------
document.querySelectorAll('.size-option input[type="radio"]').forEach(function(ele){
   ele.addEventListener('change',function(){
    document.querySelectorAll('.size-option').forEach(function(i){
       i.classList.remove("active")
    })
    ele.parentNode.parentNode.classList.add("active")
   })
  });
                     //   ---------------------


  document.querySelectorAll('.color-option input[type="radio"]').forEach(function(ele){
   ele.addEventListener('change',function(){
    document.querySelectorAll('.color-option').forEach(function(i){
       i.classList.remove("active")
    })
    ele.parentNode.parentNode.classList.add("active")
   })
  });
                    //    ---------------------------------------


 const currentYear = new Date().getFullYear();
 document.getElementById('copyright').textContent =`جميع الحقوق محفوظة لمتجر لسنة ${currentYear}`;
