// // Prompt the user to enter their ball score
// let ball = prompt("Balingizni kiriting");

// // Check the value of ball and provide appropriate alerts
// if (ball >= 0 && ball < 80) {
//   alert("Siz o'qishga kira olmadingiz");
// } else if (ball >= 80 && ball < 100) {
//   let kontraktPul = 3000;
//   let message = `Siz super-kontrakt asosida o'qishga tavsiya qilindingiz. Kontrakt miqdori yiliga ${kontraktPul}$ qancha pulingiz bor?`;
//   alert(message);
//   let pul = prompt("Kontrakt miqdori yiliga 3000$ qancha pulingiz bor?");
//   if (pul >= 3000) {
//     alert("Siz o'qishga qabul qilindiz");
//   } else {
//     alert("Siz o'qishga kirish uchun mablag' yetarli emas");
//   }
// } else if (ball >= 100 && ball < 130) {
//   let kontraktPul = 2000;
//   let message2 = `Siz kontrakt asosida qabul qilindiz. Kontrakt miqdori yiliga ${kontraktPul}$ qancha pulingiz bor?`;
//   alert(message2);
//   let pul = prompt("Kontrakt miqdori yiliga 2000$ qancha pulingiz bor?");
//   if (pul >= 2000) {
//     alert("Siz o'qishga qabul qilindiz");
//   } else {
//     alert("Siz o'qishga kirish uchun mablag' yetarli emas");
//   }
// } else if (ball >= 130 && ball <= 180) {
//   alert("Siz grant asosida o'qishga qabul qilindiz");
// } else {
//   alert("Noto’g’ri qiymat kiritildi");
// }

var ball = prompt("Balingizni kiriting");

if (ball >= 0 && ball <= 80) {
  alert("Siz oqishga kira olmadingiz ");
} else if (ball >= 80 && ball < 100) {
  alert(
    "Siz super-kontrakt asosida o'qishga tavsiya qilindingiz. Kontrakt miqdori yiliga 3000$ qancha pulingiz bor?"
  );

  var money = prompt(" Kontrakt miqdori yiliga 3000$ qancha pulingiz bor?");
  if (money >= 3000) {
    alert("Siz oqishga qabul qilimdingiz");
  } else {
    alert("Siz oqishga kirishingiz uchun mablag yetarli emas");
  }
} else if (ball >= 100 && ball <= 130) {
  alert(
    "Siz super-kontrakt asosida o'qishga tavsiya qilindingiz. Kontrakt miqdori yiliga 2000$ qancha pulingiz bor?"
  );

  var money = prompt(" Kontrakt miqdori yiliga 2000$ qancha pulingiz bor?");
  if (money >= 2000) {
    alert("Siz oqishga qabul qilindingiz");
  } else {
    alert("Siz oqishga kirishingiz uchun mablag yetarli emas");
  }
} else if (ball >= 130 && ball <= 180) {
  alert("Siz  grant asosida o'qishga qabul qilindingiz ");
} else {
  alert("Siz notogri qiymat kiritingiz");
}
