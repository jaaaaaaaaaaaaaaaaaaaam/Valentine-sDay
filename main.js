onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            var heartEnvelope = document.getElementById('heartEnvelope');
            heartEnvelope.classList.remove('hidden');
            heartEnvelope.classList.add('show');
    
            heartEnvelope.addEventListener('click', function() {
                window.location.href = 'envelope.html';
            });
        }, 5000); // Show after 5 seconds
    });
    

    