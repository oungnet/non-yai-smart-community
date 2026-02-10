
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll("[data-toggle]").forEach(b=>{
    b.onclick=()=>document.getElementById(b.dataset.toggle)?.classList.toggle("hidden");
  });
});
function lookupPromptPay(){
  const v=document.getElementById("pp-input").value;
  const r=document.getElementById("pp-result");
  if(!v){r.innerHTML="กรุณากรอกเบอร์หรือ PromptPay ID";return;}
  r.innerHTML=`<b>ผลลัพธ์ (โหมดทดลอง)</b><br>
  PromptPay ID: ${v}<br>
  ชื่อบัญชี: ชุมชนบ้านโนนใหญ่ (ทดลอง)<br>
  สถานะ: พร้อมรับเงิน`;
}
