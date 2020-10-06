var App = App || {};

const MOVIE_COUNT  = filmes.length;

(function() {
     const _doc_ = document.querySelector.bind(document);

    _movie_id = function(){
      return Math.floor(Math.random()*(MOVIE_COUNT));
    };
    _format_tempo_executacao = function(tempo){
      const patt         =  /\d+/g;
      let minutos_totais =  parseInt(tempo.match(patt),10);

      let horas = Math.floor(minutos_totais / 60);
      let minutos = minutos_totais % 60;
      let format = ` Duração: ${horas}h${minutos}`
      return format;
    };
    this.show_movie = function(){
      const movie = filmes[_movie_id()];
    
      _doc_("#cartaz").src=movie.cartaz;
      _doc_("#titulo").textContent = movie.titulo;
      _doc_("#producao").textContent = 'Ano de Produção:' + movie.producao;
      _doc_("#duracao").textContent = _format_tempo_executacao(movie.duracao);
      _doc_("#percent").classList.remove('hidden');
      _doc_("#percent").value = movie.pontuacao;
      _doc_("#lbl-percent").textContent = ' Nota IMDB: ' + movie.pontuacao + ' de 10.';
      
    };
}).apply(App);    
 

document.querySelector("#btn-selecionar-filme").addEventListener('click', function(){
  App.show_movie();
});