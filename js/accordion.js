$( function() {
    $( "#accordion" ).accordion({
      icons: false,
    });
  } );

$( ".selector" ).accordion( "option", "icons",{
    "header": false,
    "activeHeader": false 
} );