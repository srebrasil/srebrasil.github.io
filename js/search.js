jQuery(function() {
    

    // Gerar conteudo de busca a partir do /search_data.json.
    window.data = $.getJSON('/search_data.json', function(data) {
      var items = [];
      $.each(data, function (key, val) {
        items.push(val);
      })
      // Externalizar o objeto para busca
      j = JSON.stringify(items);  
      my_data = JSON.parse(j);  
  
    // Inicializar o lunr (criar o index).
      window.idx = lunr(function () {  
        this.field('title');
        this.field('content', { boost: 10 });
        this.field('highlight_title');
        this.field('comentado_por');
        this.ref('url');
        this.field('tag');
        this.field('highlight_autor');
        items.forEach (function (doc) {
          this.add(doc)
        }, this)
      });
    
  
      // JQuery para capturar evento do Form
      $("#site_search").submit(function(event){
        event.preventDefault();
        var query = $("#search_box").val(); // Pega valor do textbox
        var results = window.idx.search(query); // Submete query para api do lunr
        //Filtra os resultados do resultado da busca (que só retorna o ref:url)
        var results_full = results.map(function (item) {
          return my_data.filter(function (value, index, arr) {
              return value.url == item.ref;
          })[0];
      });
        display_search_results(results_full); // Resultados para display


    function display_search_results(results) {
      var $search_results = $("#search_results");
  
      // Aguarda carga dos dados
      window.data.then(function(loaded_data) {
  
        // Verifica se o result set não está vazio
        if (results_full.length) {
          $search_results.empty(); // Limpa a variavel
  
          // Itera sobre os resultados
          results_full.forEach(function(result) {
            var appendString = '<li><a href="' + result.url + '">' + result.title + '</a></li>';
            $search_results.append(appendString);
          });
        } else {
          // Mensagem padrão se resultados vazios.
          $search_results.html('<li>Nenhum resultado encontrado<br/></li>');
        }
      });
      }
  });
  });
});