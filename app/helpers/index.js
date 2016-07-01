export function centralizeBlock(parent, elem, centralizeProperty, cenralizeVia) {

  switch (centralizeProperty) {
    case 'width':
      centralizeByWidth(parent, elem, cenralizeVia);
      break;
    case 'height':
      centralizeByHeight(parent, elem, cenralizeVia);
      break;
  }
}

export function centralizeByWidth(parent, elem, centralizeVia) {
  let parentSize = parseInt(getComputedStyle(parent).width);
  let elemSize = parseInt(getComputedStyle(elem).width);
}

export function centralizeByHeight(parent, elem, centralizeVia) {
  let parentSize = parent.clientHeight;
  let elemSize = elem.clientHeight;
  if(centralizeVia === 'parent-top'){
    parent.style[centralizeVia] = (parentSize - elemSize) - elemSize / 2 + 'px';
  }
  if(centralizeVia === 'margin-top'){
    elem.style[centralizeVia] = (parentSize - elemSize) - elemSize / 2 + 'px';
  }
}
