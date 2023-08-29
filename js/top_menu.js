window.addEventListener('DOMContentLoaded', function() {
    fetch('top_menu.html')
        .then(function(response) {
            return response.text();
        })
        .then(function(content) {
            document.getElementById('topmenu-placeholder').innerHTML = content;
        })
        .catch(function(error) {
            console.log('Error fetching footer content:', error);
        });
});