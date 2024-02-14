// JavaScript to load a welcome message, open more info, change text color, and enlarge profile picture
window.onload = function() {
    // Welcome message
    alert("Hello! Welcome to my profile.");

    // Opens up information upon clicking "learn more"
    document.getElementById("learn-more-btn").onclick = function() {
        document.getElementById("more-info").classList.toggle("hidden");
    };

    // Changes text color every 10 seconds
    setInterval(changeColor, 10000);

    // Function to change text color
    function changeColor() {
        var colors = ['#ff0000', '#00ff00', '#0000ff']; 
        var randomColor = colors[Math.floor(Math.random() * colors.length)]; 
        document.body.style.color = randomColor; 
    }

    // Enlarges profile picture on hover
    var profilePic = document.getElementById('profile-pic'); // Get the profile picture element

    // Enlarges the profile picture
    function enlargeProfilePic() {
        profilePic.style.width = '250px'; 
        profilePic.style.height = '250px'; 
    }

    // Shrinks the profile picture to normal
    function shrinkProfilePic() {
        profilePic.style.width = '200px'; 
        profilePic.style.height = '200px'; 
    }

    profilePic.onmouseover = enlargeProfilePic; 
    profilePic.onmouseout = shrinkProfilePic; 
};
