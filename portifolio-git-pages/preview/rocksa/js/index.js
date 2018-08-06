$(document).ready(function() {

  // import view port library function
  jQuery.extend(verge);

  // smooth scrolling of viewport to target
  $('a[href^="#"]').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 50
    }, 900);
  });

  $('#down').click(function() {
    $('html,body').animate({
      scrollTop: $('#about').offset().top - 50
    }, 900);
  });

  var currentTime = new Date();
  var year = currentTime.getFullYear();

  // data for the portfolio cards front and back
  var projectData = [{
      title: 'Programa #01',
      text: '<p> Em breve toda a nossa lista de programação!',

      image: ['https://github.com/henriquedomanski/Backgrounds/blob/master/rocksaamarelo.png?raw=true'],
      site: [
        ['Mais Informações', 'fa-link', 'https://www.facebook.com/rocksaoficial/']
        
        
      ]
    }, {
      title: 'Programa #02',
      text: '<p> Em breve toda a nossa lista de programação!',

      image: ['https://github.com/henriquedomanski/Backgrounds/blob/master/rocksaamarelo.png?raw=true'],
      site: [
       ['Mais Informações', 'fa-link', 'https://www.facebook.com/rocksaoficial/']
      ]
    }, {
      title: 'Programa #03',
      text: '<p> Em breve toda a nossa lista de programação!',

      image: ['https://github.com/henriquedomanski/Backgrounds/blob/master/rocksaamarelo.png?raw=true'],
      site: [
        ['Mais Informações', 'fa-link', 'https://www.facebook.com/rocksaoficial/']
      ]
    }, {
      title: 'Programa #04',
      text: '<p> Em breve toda a nossa lista de programação!',

      image: ['https://github.com/henriquedomanski/Backgrounds/blob/master/rocksaamarelo.png?raw=true'],
      site: [
        ['Mais Informações', 'fa-link', 'https://www.facebook.com/rocksaoficial/']
      ]
    }, {
      title: 'Programa #05',
      text: '<p> Em breve toda a nossa lista de programação!',

      image: ['https://github.com/henriquedomanski/Backgrounds/blob/master/rocksaamarelo.png?raw=true'],
      site: [
        ['Mais Informações', 'fa-link', 'https://www.facebook.com/rocksaoficial/']
      ]
    },
    {
        title: 'Programa #06',
      text: '<p> Em breve toda a nossa lista de programação!',

      image: ['https://github.com/henriquedomanski/Backgrounds/blob/master/rocksaamarelo.png?raw=true'],
      site: [
        ['Mais Informações', 'fa-link', 'https://www.facebook.com/rocksaoficial/']
      ]
    },
    
    
    
   
  ];

  // add listener to all the cards for click flipping
  function addListener() {
    var cards = document.querySelectorAll(".card.effect_click");

    for (var i = 0; i < cards.length; i++) {
      clickListener(cards[i]);
    }

    function clickListener(card) {
      card.addEventListener("click", function() {
        this.classList.toggle("flipped");
      });
    }
  }

  // create, populate and show portfolio project cards
  function showProjectCards() {
    var html = '';

    projectData.forEach(function(project) {
      html += '<div class="col-sm-6 col-md-4">';
      html += '<div class="card effect_click"><div class="card_front">';
      html += '<figure><img class="img-responsive" src="' + project.image[0] + '">';
      html += '<figcaption class="project-title">';
      html += project.title;
      html += '</figcaption></figure></div>';

      html += '<div class="card_back"><figure>';
      html += '<div class="project-title">' + project.title + '</div>';
      html += '<figcaption">';
      html += '<div class="project-body">' + project.text + '</div>';
      html += '<div><a data-toggle="tooltip" title="' + project.site[0][0] + '" data-placement="top" href="' + project.site[0][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk0"><i class="fa ' + project.site[0][1] + '" aria-hidden="true"></i></a>';

      if (typeof project.site[1] !== 'undefined') {
        html += '<a data-toggle="tooltip" title="' + project.site[1][0] + '" data-placement="top" href="' + project.site[1][2] + '" target="_blank" class="btn btn-primary btn-lg btn-circle btn-lnk btn-lnk1"><i class="fa ' + project.site[1][1] + '" aria-hidden="true"></i></a>';
      }

      html += '</div></figcaption></figure></div>';
      html += '</div>';
      html += '</div>';
    });

    $('#theProjects').append(html);
    addListener();
  }

  showProjectCards();
  $(".copyright").append("<span>©Copyright " + year + " Rádio Rock S/A - All Rights Reserved</span>");

  // turn on bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();

});