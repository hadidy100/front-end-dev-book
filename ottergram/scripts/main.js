/*
Get all the tghumbnails.
Listen for a click on each none
If a click occures, uppdate the detail image with info from that tghumbnails
  Ger the image URL from the thumbnail data attribute
  Ger the title text from the thumbnail's data attribute
  Set the image and title on teh detail image
*/

var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetails (imageURL, titleText) {
  'use strict';
   var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
   detailImage.setAttribute('src',imageURL);

   var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
   detailTitle.textContent=titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}


function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
￼
