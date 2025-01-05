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
             // المنتج اجمالى سعر حساب 

      document.querySelectorAll("[data-product-qunatity]").forEach(function(item){
         item.addEventListener('change',function(){
            const qunatity3 = item.value;
            const parent=item.closest("[data-product-info]")//tr كدا تم الوصول للعنصر الاب 
            const price4=parent.getAttribute("data-product-price");//data-product-price='400' وبما ان وصلتله هاخد منه 
            const total=qunatity3 * price4 //(القيمة المختارة (value) * 400) => (data-product-price='400')
            parent.querySelector(".total-price-for-product").innerHTML=total+"$"// سوف اضعها فى الخلية الخاصه بالسعر الاجمالى  total القيمة الناتجة من العنصر 
           
            calcprice();
         })
      })  

      document.querySelectorAll("[data-remove-from-card]").forEach((item)=>{
         item.addEventListener('click',()=>{
            item.closest("[data-product-info]").remove();
            calcprice();
            

         })
      })
      function calcprice(){
         let totalAllprice=0;
            document.querySelectorAll("[data-product-info]").forEach(function(product){
            const price5 = product.getAttribute("data-product-price")
            const qunatity5=product.querySelector("[data-product-qunatity]").value;
            const totalPrice=price5*qunatity5;
            totalAllprice=totalAllprice + totalPrice;
            })
            document.querySelector("#total-price-of-all-product").innerHTML=totalAllprice+"$";

      }

     
   






    
   








 const currentYear = new Date().getFullYear();
 document.getElementById('copyright').textContent =`جميع الحقوق محفوظة لمتجر لسنة ${currentYear}`;
