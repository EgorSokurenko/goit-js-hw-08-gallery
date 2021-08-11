  import galleryItems from './app.js';
  
  const gallery = document.querySelector('.js-gallery');
  const galleryEls = createGalleryEl(galleryItems);
  gallery.insertAdjacentHTML('beforeend', galleryEls.join(' '))
  
  function createGalleryEl(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a
          class="gallery__link"
          href="#"
          
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li> 
      `;
    });
  }
  
  
  gallery.addEventListener('click',onOpenModal)
  
  const lightbox = document.querySelector('.js-lightbox')
  const lightboxImage = document.querySelector('.lightbox__image')
  
  function onOpenModal(evt){
    const image = evt.target.classList.contains('gallery__image')
    if(!image){
      return
    }
    
    const urlImg = evt.target.dataset.source;
    const altImg = evt.target.alt;
    lightboxImage.src = urlImg
    lightboxImage.alt = altImg
    lightbox.classList.add('is-open')
  
  }
  
  lightbox.addEventListener('click', onCloseModalBackDrop)
  function onCloseModalBackDrop (evt) {
    if(evt.target.classList.contains('lightbox__overlay')){
      lightbox.classList.remove('is-open')
    lightboxImage.src = ''
    }else if(evt.target === closeBut){
      lightbox.classList.remove('is-open')
      lightboxImage.src = ''
    }
    
  }

  const closeBut = document.querySelector('button[data-action="close-lightbox"]')
  