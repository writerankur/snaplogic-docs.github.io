/*
  Basic JavaScript/JQuery
*/


$(document).ready(function() {
  $(".prereq").prepend('<h2 class="title sectiontitle">Prerequisites</h2>');
  $(".result").prepend('<h2 class="title sectiontitle">Results</h2>');
  $(".example").prepend('<h2 class="title sectiontitle">Example</h2>');
  $(".tasktroubleshooting").prepend('<h2 class="title sectiontitle">Troubleshooting</h2>');
  $(".postreq").prepend('<h2 class="title sectiontitle">Next steps</h2>');
  $(".related-links").prepend('<h2 class="title sectiontitle">Related links</h2>');

  /* The 'steps' class is in the ol tag, not in the section tag. */
  $("section:has(ol.steps)").prepend('<h2 class="title sectiontitle">Steps</h2>');
  $("section:has(ul.steps-unordered)").prepend('<h2 class="title sectiontitle">Steps</h2>');

  /* The following is a hack to fix the extra leading blank char with normalize-space. */
  $(".normalize-space code").each( function() {
    $(this).text( $(this).text().slice(1) );
  });


  /* Tabs */
  $('.tablink').click( function() {
    $('.tablink').removeClass( 'active' );
    $('.tabcontent').hide();

    var myX = '.api-' + $(this).text().toLowerCase();
    $(myX).addClass( 'active' );
    $(myX).show();
  });
  /* if ( $('#section-api-notes').length ) { $('.api-notes').show() } else { $('.api-notes').hide(); } */
  /* if ( $('#section-api-examples').length ) { $('.api-examples').show() } else { $('.api-examples').hide(); } */
  $('.tabs>li:first-child').trigger( 'click' );



  /* OS tabs
  $('.ostabs-link').click( function() {
    $('.ostabs-link').removeClass( 'active' );
    $('.ostabs-content').hide();

    var myX = '.os-' + $(this).text().toLowerCase();
    $(myX).addClass( 'active' );
    $(myX).show();
  });
  $('.ostabs>li:first-child').trigger( 'click' );
  */

  /* Library (standard/React) tabs
  $('.libtabs-link').click( function() {
    $('.libtabs-link').removeClass( 'active' );
    $('.libtabs-content').hide();

    var myY = '.lib-' + $(this).text().toLowerCase();
    $(myY).addClass( 'active' );
    $(myY).show();
  });
  $('.libtabs>li:first-child').trigger( 'click' );
   */

});
