function imageOverlay(elementID, baseImageURL, overlayImageURL){
    const adjustOpacity = (e) => {
        //console.log(e.target.value);
        overlayImage.css({opacity: `${e.target.value}%`});
    }

    let element = $(`#${elementID}`);
    element.addClass('image-map-overlay-container')
    let imageHolder = $('<div class="image-map-overlay">');
    let baseImage = $(`<img src="${baseImageURL}" class="base-image">`);
    let overlayImage = $(`<img src="${overlayImageURL}" class="overlay">`);
    overlayImage.css({opacity: '50%'});

    imageHolder.append(baseImage);
    imageHolder.append(overlayImage);
    element.append(imageHolder);

    let sliderLabel = $('<label for="overlaySlider">Adjust overlay opacity: </label>')
    let slider = $('<input class="overlay-slider" id="overlaySlider" name="overlaySlider" type="range" min="1" max="100" value="50">');
    slider.change(adjustOpacity);
    element.append(sliderLabel);
    element.append(slider);

}