$(document).ready(function() {

  $('#search').click(function() {
    var search = $('#text_field').val()
    $.getJSON('https://www.omdbapi.com/?s=' + search + '', function(data) {
      $('#center_column').html("")
      data.Search.forEach(function(val, key) {
        var $title = $("<div>", {html: val.Title + ", " + val.Year})
        if(val.Poster === "N/A"){
          var $poster = $("<img>", {class:'movie_poster', src:"mockups/images/no_image.png"})
        } else {
          var $poster = $("<img>", {class:'movie_poster', src:val.Poster})
        }
        $('#center_column').append($title, $poster)
      })
    })
  })
})
