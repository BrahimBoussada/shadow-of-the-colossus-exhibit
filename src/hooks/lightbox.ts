import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDeepZoom from "../plugins/photoswipe-deep-zoom-plugin.esm";

export function usePhotoSwipe(gallerySelector: string) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: gallerySelector,
      children: "a",
      pswpModule: () => import("photoswipe"),
      allowPanToNext: false,
      wheelToZoom: true,
      zoom: false,
    });

    new PhotoSwipeDeepZoom(lightbox, { tileSize: 256 });

    lightbox.init();

    return () => lightbox.destroy();
  }, [gallerySelector]);
}
