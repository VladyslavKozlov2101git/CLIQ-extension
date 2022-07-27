const BASE_HOST = 'http://api.chaincliq.4-com.pro';
const REQUEST_AD_URL = `${BASE_HOST}/ad?key=10786350-c654-416a-91e4-4ab0490e032b`;
const STYLES_URL = `${BASE_HOST}/styles`;

function findAllAdBlocks(selector = '#cliq-ad') {
  return document.querySelectorAll(selector);
}

async function getRandomMedia() {
  return fetch(REQUEST_AD_URL);
}

async function getMediaHTMLObjectFromResponse(response) {
  const blob = await response.blob();
  const contentType = response.headers.get('content-type');
  switch (contentType) {
    case 'image/jpeg':
    case 'image/gif':
    case 'image/png':
    case 'image/svg+xml':
      const img = document.createElement('img');
      img.src = URL.createObjectURL(blob);
      return img;
    case 'video/mp4':
    case 'video/webm':
    case 'video/ogg':
    case 'video/quicktime':
    case 'video/x-msvideo':
      const video = document.createElement('video');
      video.src = URL.createObjectURL(blob);
      video.controls = false;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      return video;
    default:
      console.error(`Unknown content type ${contentType}`);
      break;
  }
}
function main() {
  // add base style
  const head = document.head;
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = STYLES_URL;

  head.appendChild(link);

  // Find all divs with id cliq-ad
  const adDivs = findAllAdBlocks();
  // For each div
  adDivs.forEach(async (adDiv) => {
    const mediaResponse = await getRandomMedia();
    const mediaHTMLObject = await getMediaHTMLObjectFromResponse(mediaResponse);
    adDiv.style.width = adDiv.dataset.width;
    adDiv.style.height = adDiv.dataset.height;
    adDiv.appendChild(mediaHTMLObject);
  });
}

window.onload = main;
