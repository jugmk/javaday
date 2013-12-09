//TODO:massive cleanup needed
$(function () {
  function bio(photo, text) {
    return '<div class="media"><img class="media-object pull-left photo img-rounded" src="' + photo + '" /><div class="media-body">' + text + '</div></div>';
  }

  function rowClick() {
    var tds = $(this).children();
    var time = tds.get(0).innerHTML;

    if (!$(tds.get(1)).children().get(0)) return;

    var title1 = $(tds.get(1)).children().get(0).innerHTML;
    var title2 = $(tds.get(1)).children().get(1).innerHTML;

    var speaker1 = $(tds.get(2)).children().get(0).innerHTML;
    var speaker2 = $(tds.get(2)).children().get(1).innerHTML;
    var speakers = speaker2.split("---");

    var photos = $(tds.get(2)).children().get(1).getAttribute("data-photos");
    photos = photos != null ? photos.split(",") : [''];
    var two = photos.length == 2 || speakers.length == 2;

    $("#modal-title").html(title1);
    $("#modal-speaker").html(speaker1);

    $("#talk-details").html(title2);

    var sp1 = bio(photos[0], speakers[0]);
    var sp2 = two ? bio(photos[1], speakers[1]) : '';


    $("#speaker-details").html(sp1 + sp2);

    $("#info").modal('show');
  }

  $('tr').click(rowClick);
});