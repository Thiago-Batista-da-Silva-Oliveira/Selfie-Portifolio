 document.querySelectorAll('a').forEach(link => {
            const conteudo = document.querySelector('.box-container')
            link.onclick= function(e){
               
                fetch(link.href) 
                .then(resp => resp.text()) 
                .then(html => conteudo.innerHTML = html)
            }
        })