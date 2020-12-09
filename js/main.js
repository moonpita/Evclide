window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function(){         
      document.querySelectorAll('.header-list').forEach(function(element){
          element.classList.toggle('js-is-active')
      })
      document.querySelectorAll('.header-list-wrap').forEach(function(element){
        element.classList.toggle('js-is-active')
      })   
      document.querySelectorAll('.header-list-item').forEach(function(element){
      element.classList.toggle('js-is-active')
      })
      document.querySelectorAll('.header-link').forEach(function(element){
        element.classList.toggle('js-is-active')
        }) 
      document.querySelectorAll('.header-list-wrap').forEach(function(element){
        element.classList.toggle('js-is-active-list')
      })
      document.querySelectorAll('.header-list').forEach(function(element){
        element.classList.toggle('js-is-active-list')
    })     
      document.querySelector('.header-logo').classList.toggle('js-is-off')  
      document.querySelector('.header-search').classList.toggle('js-search-open')          
    })

})