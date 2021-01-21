$(function() {
  // dialog
  $('#help').click(function() {
    $('#helpdialog').dialog({
      // buttons: [{ text: 'OK', click: function() { $(this).dialog('close'); } }]
      buttons: {
        OK: function() {
          $(this).dialog('close');
        },
        close: function() {
          $(this).dialog('close');
        }
      }
    });
  }); //? end click

  // tabs
  $('#tabs').tabs();

  // datepicker
  $('#datepicker').datepicker();

  //button
  $('#submitbutton').button();

  //slider
  $('#slider').slider({
    min: 1,
    max: 100,
    range: true,
    values: [11, 50],
    slide: function(e, ui) {
      $('#employees').val(ui.values[0] + " - " + ui.values[1]);
    }
    });
  $('#employees').val(11 + ' - ' + 50);
}); //? end ready