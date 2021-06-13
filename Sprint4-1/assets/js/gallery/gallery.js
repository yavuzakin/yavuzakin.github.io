$(document).ready(function() {
  $('.gallery-content .gallery-item').css('cursor', 'pointer');
  
  jQuery("#animated-thumbnails-gallery")
          .justifiedGallery({
            captions: false,
            lastRow: "hide",
            rowHeight: 180,
            margins: 5
          })
          .on("jg.complete", function () {
            window.lightGallery(
              document.getElementById("animated-thumbnails-gallery"),
              {
                autoplayFirstVideo: false,
                pager: false,
                galleryId: "nature",
                plugins: [lgZoom, lgThumbnail],
                mobileSettings: {
                  controls: false,
                  showCloseIcon: false,
                  download: false,
                  rotate: false
                }
              }
            );
          });
});