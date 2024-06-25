// var ask = prompt("Balingizni kiriting");

// if (ask > 0 < 80) {
//   var aSk = "Siz oqishga kira olmadingiz";
//   console.log(aSk);

//   if (ask > 80 < 100) {
//     var Ask = "Siz super-kontrakt asosida o'qishga tavsiya qilindingiz";
//     console.log(Ask);
//   }
// }
// var value = prompt("kontrakt miqdori yiliga 3000 $ qancha pulingiz bor");
// if (value > 3000 || value < 3000) {
//   console.log("sizning mablagingiz yetdi  va siz bemalol oqishingiz mumkin ");
// } else {
//   console.log("sizning mablagingiz yetmadi afsus siz oqiy ol maysiz");
// }
// Prompt the user to enter their ball score
// Prompt the user to enter their ball score
let ball = prompt("Enter your ball score:");

// Convert the input to a number (assuming valid input from the user)
ball = parseFloat(ball);

// Check the value of ball and provide appropriate alerts
if (ball >= 0 && ball < 80) {
  alert("Siz o'qishga kira olmadingiz");
} else if (ball >= 80 && ball < 100) {
  let kontraktPul = 3000;
  let message = `Siz super-kontrakt asosida o'qishga tavsiya qilindingiz. Kontrakt miqdori yiliga ${kontraktPul}$ qancha pulingiz bor?`;
  alert(message);
  let pul = prompt("Kontrakt miqdori yiliga 3000$ qancha pulingiz bor?");
  pul = parseFloat(pul);
  if (pul >= 3000) {
    alert("Siz o'qishga qabul qilindiz");
  } else {
    alert("Siz o'qishga kirish uchun mablag' yetarli emas");
  }
} else if (ball >= 100 && ball < 130) {
  let kontraktPul = 2000;
  let message = `Siz kontrakt asosida qabul qilindiz. Kontrakt miqdori yiliga ${kontraktPul}$ qancha pulingiz bor?`;
  alert(message);
  let pul = prompt("Kontrakt miqdori yiliga 2000$ qancha pulingiz bor?");
  pul = parseFloat(pul);
  if (pul >= 2000) {
    alert("Siz o'qishga qabul qilindiz");
  } else {
    alert("Siz o'qishga kirish uchun mablag' yetarli emas");
  }
} else if (ball >= 130 && ball <= 180) {
  alert("Siz grant asosida o'qishga qabul qilindiz");
} else {
  alert("Noto’g’ri qiymat kiritildi");
}
