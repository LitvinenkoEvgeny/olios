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
  let parentPadding = 0;
  let parentSize = parent.clientHeight;
  let elemSize = elem.clientHeight;

  if (getComputedStyle(parent).paddingTop) {
    parentPadding = parseInt(getComputedStyle(parent).paddingTop);
  }

  if (centralizeVia === 'margin-top') {
    elem.style[centralizeVia] = (parentSize - elemSize) / 2 - parentPadding + 'px';
  }
}


