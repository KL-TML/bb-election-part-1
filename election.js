document.addEventListener("DOMContentLoaded", function() {

  // Imagination!
  $.ajax({

    url: "https://bb-election-api.herokuapp.com/",
    method: "GET",
    dataType: "JSON",
  }).done(function(responseData){
    var ul = document.querySelector('#candidates');

    data.candidates.forEach(function(candidate){
      li = document.createElement("li");
      li.innerHTML = '<b>' + candidate.name + ':</b>' + candidate.votes + ' votes';
      ul.appendChild(li);

    });
  });
});
