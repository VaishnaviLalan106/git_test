console.log("JavaScript connected");
const qrCode = document.getElementById("qrCode");
const message = document.getElementById("message");


qrCode.addEventListener("click", function(){

    message.innerHTML = "✅ QR Code clicked! Ready to scan 🚀";

    qrCode.style.transform = "scale(1.05)";

});