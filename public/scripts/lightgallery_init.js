document.addEventListener("DOMContentLoaded", () => {
    import("lightgallery").then((lg) => {
      import("lightgallery/plugins/thumbnail").then((lgThumbnail) => {
        import("lightgallery/plugins/zoom").then((lgZoom) => {
          const galleryElement = document.getElementById("lightgallery");
          if (galleryElement) {
            lg.default(galleryElement, {
              plugins: [lgThumbnail.default, lgZoom.default],
              speed: 500,
            });
          } else {
            console.error("LightGallery element not found.");
          }
        });
      });
    });
  });
  