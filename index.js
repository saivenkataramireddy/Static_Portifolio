/*slidebar functioning */
function showslidebar(){
    const slidebar= document.querySelector('#slidebar')
    slidebar.style.display='flex'
}
function hidebar()
{
    const slidebar= document.querySelector('#slidebar')
    slidebar.style.display='none'
} 
function toggleReadMore() {
    var moreText = document.getElementById("more-about");
    var btnText = document.getElementById("read-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btnText.textContent = "Read less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Read more";
    }
}
