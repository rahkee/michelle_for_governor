function initialize() {

    console.log("Vote Michelle for Governor!");
    
    const tickerBar = document.querySelector('#tickerContainer');
    const tickerBarText = document.querySelector('#tickerContainer p');
    const tickerBarTextWidth = tickerBarText.getBoundingClientRect().width;
    const tickerBarTextWidthFixed = "-" + tickerBarTextWidth.toFixed(2) + "px";
    
    // Duplicate the ticker bar text...
    for (let x = 0; x < 3; x++) {    
        let tickerBarTextCopy = tickerBarText.cloneNode(true);
        tickerBar.appendChild(tickerBarTextCopy);
    }
    
    document.documentElement.style.setProperty('--tickerParagraphWidth', tickerBarTextWidthFixed);
}

initialize();