  
    // window.addEventListener('DOMContentLoaded', function() {
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'footer.html', true);
    //     xhr.onreadystatechange = function() {
    //         if (xhr.readyState === 4 && xhr.status === 200) {
    //             document.getElementById('footer-placeholder').innerHTML = xhr.responseText;
    //         }
    //     };
    //     xhr.send();
    // });


   
    window.addEventListener('DOMContentLoaded', function() {
        fetch('footer.html')
            .then(function(response) {
                return response.text();
            })
            .then(function(content) {
                document.getElementById('footer-placeholder').innerHTML = content;
            })
            .catch(function(error) {
                console.log('Error fetching footer content:', error);
            });
    });
