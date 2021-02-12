//Default Styles if User not defined any parameter while calling function
const buttonizeDefaultOptions = {
    color: 'white',
    backgroundColor: '#6200EE',
    fontStyle: 'inherit',
    fontSize: '16px',
    padding: '12px 30px',
    textAlign: 'center',
    margin: '2px 2px',
    cursor: 'pointer',
    borderRadius: '3px',
    border: 'none' //border: border-width border-style border-color|initial|inherit
}

//Create Simple Button
const Buttonize = async (options = buttonizeDefaultOptions) => {
    await Object.keys(buttonizeDefaultOptions).forEach((key) => {
        if (options[key]) {
            buttonizeDefaultOptions[key] = options[key]
        }
    });
    const { color, backgroundColor, fontStyle, fontSize, padding, textAlign, border, borderRadius, cursor, margin } = buttonizeDefaultOptions;
    //Getting element using class name 
    let target = document.querySelectorAll('.buttonize');
    target.forEach(target => {
    target.style.color = `${color}`;
    target.style.backgroundColor = `${backgroundColor}`;
    target.style.fontStyle = `${fontStyle}`;
    target.style.fontSize = `${fontSize}`;
    target.style.display = `inline-block`;
    target.style.padding = `${padding}`;
    target.style.textAlign = `${textAlign}`;
    target.style.margin = `${margin}`;
    target.style.cursor = `${cursor}`;
    target.style.border = `${border}`;
    target.style.textDecoration = `none`;
    target.style.borderRadius = `${borderRadius}`;
    target.style.overFlow = `hidden`;
})
    //Hover Effect
    addRule(".buttonize:hover", {
        opacity: "0.9"
    })

}

//Default Styles if User not defined any parameter while calling function
const ButtonizeShineDefaultOption = {
    color: 'Black',
    backgroundColor: 'transparent',
    fontWeight: '700',
    fontStyle: 'inherit',
    fontSize: '16px',
    padding: '12px 30px',
    textAlign: 'center',
    margin: '2px 2px',
    cursor: 'pointer',
    borderRadius: '3px',
    boxShadow: '2px 2px 25px 10px #6200EE',
    border: '3px solid #6200EE' //border: border-width border-style border-color|initial|inherit
}

//Create Shine Button
const ButtonizeShine = async (options = ButtonizeShineDefaultOption) => {
    await Object.keys(ButtonizeShineDefaultOption).forEach((key) => {
        if (options[key]) {
            ButtonizeShineDefaultOption[key] = options[key]
        }
    });
    const { border, textAlign, padding, margin, color, cursor, borderRadius, fontWeight, backgroundColor, fontStyle, fontSize, boxShadow } = ButtonizeShineDefaultOption;
    //Getting element using class name 
    let target = document.querySelectorAll('.buttonize-shine');
    target.forEach(target => {
    target.style.display = `inline-block`;
    target.style.textDecoration = `none`;
    target.style.position = `relative`;
    target.style.overFlow = `hidden`;
    target.style.border = `${border}`;
    target.style.padding = `${padding}`;
    target.style.textAlign = `${textAlign}`;
    target.style.borderRadius = `${borderRadius}`;
    target.style.color = `${color}`;
    target.style.backgroundColor = `${backgroundColor}`;
    target.style.fontStyle = `${fontStyle}`;
    target.style.fontWeight = `${fontWeight}`;
    target.style.fontSize = `${fontSize}`;
    target.style.cursor = `${cursor}`;
    target.style.margin = `${margin}`;
});
    //hover effect
    addRule(".buttonize-shine:hover", {
        "box-shadow": `${boxShadow}`
    })
}

const ButtonizeRippleDefaultOption = {
    color: 'white',
    backgroundColor: '#6200ee',
    fontWeight: '700',
    fontStyle: 'inherit',
    fontSize: '16px',
    padding: '12px 30px',
    textAlign: 'center',
    margin: '2px 2px',
    cursor: 'pointer',
    borderRadius: '3px',
    boxShadow: '2px 2px 25px 10px #6200EE',
    border: 'none', //border: border-width border-style border-color|initial|inherit
    rippleColor: 'rgba(255, 255, 255, 0.7)'
}

const ButtonizeRipple = async(options = ButtonizeRippleDefaultOption) => {
    await Object.keys(ButtonizeRippleDefaultOption).forEach((key) => {
        if (options[key]) {
            ButtonizeRippleDefaultOption[key] = options[key]
        }
    });
    const { borderRadius, color, rippleColor, margin, backgroundColor, cursor, border, padding, fontSize, fontWeight, fontStyle } = ButtonizeRippleDefaultOption;
    //Getting element using class name
    let target = document.querySelectorAll('.buttonize-ripple');
    target.forEach(target => {
    target.style.position = `relative`;
    target.style.overflow = `hidden`;
    target.style.display = `inline-block`;
    target.style.transition = `background 400ms`;
    target.style.borderRadius = `${borderRadius}`;
    target.style.color = `${color}`;
    target.style.backgroundColor = `${backgroundColor}`;
    target.style.padding = `${padding}`;
    target.style.fontStyle = `${fontStyle}`;
    target.style.fontWeight = `${fontWeight}`;
    target.style.fontSize = `${fontSize}`;
    target.style.border = `${border}`;
    target.style.cursor = `${cursor}`;
    target.style.margin = `${margin}`;
    //Event Listener
    target.addEventListener("click", createRipple);
    })

    //Ripple Effect Style
    var sheet = document.createElement('style');
    sheet.innerHTML = `span.rippleEffect {
        position: absolute; 
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 600ms linear;
        background-color: ${rippleColor};
      }
      @keyframes ripple {
        to {
          transform: scale(2);
          opacity: 0;
        }
      }`;
    document.body.appendChild(sheet); 

}


//Ripple effect Logic
const  createRipple = (event) => {
    const target = event.currentTarget;
    const newElement = document.createElement("span");
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;
    newElement.style.width = newElement.style.height = `${diameter}px`;
    newElement.style.left = `${event.clientX - target.offsetLeft - radius}px`;
    newElement.style.top = `${event.clientY - target.offsetTop - radius}px`;
    newElement.classList.add("rippleEffect");
    
    const ripple = target.getElementsByClassName("rippleEffect")[0];
    if (ripple) {
      ripple.remove();
    }
    target.appendChild(newElement);
  }

//To add any rule want to add with css class
var addRule = (function(style){
    var sheet = document.head.appendChild(style).sheet;
    return function(selector, css){
        var propText = Object.keys(css).map(function(p){
            return p+":"+css[p]
        }).join(";");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    }
})(document.createElement("style"));

module.exports = { Buttonize, ButtonizeShine, ButtonizeRipple };